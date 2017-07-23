import {Injectable} from '@angular/core';
import {HttpService, StorageService} from './';
import {Subject} from 'rxjs/Subject';
import {Hero, Planet, Species, Starship, Vehicle, Film} from '../classes';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/zip';
import {ReplaySubject} from 'rxjs/ReplaySubject';

@Injectable()
export class ApiService {

  private baseUrl: string;
  private hero: Subject<Hero>;
  private hero$: Observable<Hero>;
  private heroesCount: number;
  private _heroesCount: ReplaySubject<number>;
  private heroesCount$: Observable<number>;
  private currentHero: number;
  private _currentHero: ReplaySubject<number>;
  private currentHero$: Observable<number>;

  constructor(private http: HttpService,
              private storage: StorageService) {
    this.baseUrl = environment.api.base;

    this._heroesCount = new ReplaySubject(1);
    this.heroesCount$ = this._heroesCount.asObservable();

    this.currentHero = this.storage.read().lastHero;
    this._currentHero = new ReplaySubject(1);
    this.currentHero$ = this._currentHero.asObservable();

    this.hero = new Subject();
    this.hero$ = this.hero.asObservable();
  }

  public subscribeHero(): Observable<Hero> {
    return this.hero$;
  }

  public getHeroId(): Observable<number> {
    return this.currentHero$;
  }

  public getHero(id): void {
    id = parseInt(id, 10);

    this.http.get(this.baseUrl + environment.api.people + id)
      .first()
      .map((response: Response) => response.json())
      .flatMap(person => {
        const planet$: Observable<Planet> = this.getPlanetByUrl(person.homeworld);
        const species$: Observable<Species> = this.getSpeciesByUrl(person.species[0]);

        const vehicles$: Observable<Vehicle>[] = [];
        person.vehicles.forEach(url => vehicles$.push(this.getVehicleByUrl(url)));

        const starships$: Observable<Starship>[] = [];
        person.starships.forEach(url => starships$.push(this.getStarshipByUrl(url)));

        const films$: Observable<Film>[] = [];
        person.films.forEach(url => films$.push(this.getFilmByUrl(url)));

        const combinedFilms$: Observable<Film[]> = films$.length
          ? Observable.forkJoin(...films$)
          : Observable.of([]);
        const combinedVehicles$: Observable<Vehicle[]> = vehicles$.length
          ? Observable.forkJoin(...vehicles$)
          : Observable.of([]);
        const combinedStarships$: Observable<Starship[]> = starships$.length
          ? Observable.forkJoin(...starships$)
          : Observable.of([]);

        return Observable
          .forkJoin(planet$, species$, combinedFilms$, combinedStarships$, combinedVehicles$)
          .flatMap(data => {
            person.homeworld = data[0];
            person.species = data[1];
            person.films = data[2];
            person.starships = data[3];
            person.vehicles = data[4];

            return Observable.of(person);
          });
      })
      .subscribe(
        person => {
          const hero = new Hero(person);
          this.hero.next(hero);
          this.currentHero = id;
          this.storage.write(id);
        },
        error => {
          console.error(error);

          if (this.heroesCount && id > this.heroesCount) {
            this._currentHero.next(this.currentHero);
          } else {
            this._currentHero.next(++id);
          }
        }
      );
  }

  public getCount(): Observable<number> {
    if (!this.heroesCount) {
      this.http.get(this.baseUrl + environment.api.people)
        .first()
        .map((response: Response) => response.json())
        .subscribe(data => {
          this.heroesCount = data.count;
          this._heroesCount.next(this.heroesCount);
        });
    }

    return this.heroesCount$;
  }

  private getPlanetByUrl(url): Observable<Planet> {
    return this.http.get(url)
      .first()
      .map((response: Response) => new Planet(response.json()));
  }

  private getSpeciesByUrl(url): Observable<Species> {
    return this.http.get(url)
      .first()
      .map((response: Response) => new Species(response.json()));
  }

  private getVehicleByUrl(url): Observable<Vehicle> {
    return this.http.get(url)
      .first()
      .map((response: Response) => new Vehicle(response.json()));
  }

  private getStarshipByUrl(url): Observable<Starship> {
    return this.http.get(url)
      .first()
      .map((response: Response) => new Starship(response.json()));
  }

  private getFilmByUrl(url): Observable<Film> {
    return this.http.get(url)
      .first()
      .map((response: Response) => new Film(response.json()));
  }
}
