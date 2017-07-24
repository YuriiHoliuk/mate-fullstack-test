import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService, StorageService} from '../../services';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../../classes';

@Component({
  selector   : 'app-heroes-page',
  templateUrl: './heroes-page.component.html',
  styleUrls  : ['./heroes-page.component.scss']
})
export class HeroesPageComponent implements OnInit {

  private heroesCount: number;
  private currentHero: number;
  public loading: boolean;
  public shouldShowHelp: boolean;

  private hero$: Observable<Hero>;
  public hero: Hero;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: ApiService,
              private storage: StorageService) {
    this.handleClick = this.handleClick.bind(this);
    this.closeHelp = this.closeHelp.bind(this);
    this.loading = true;
  }

  ngOnInit() {
    const {newbie, lastHero} = this.storage.read();
    this.shouldShowHelp = newbie;
    this.currentHero = lastHero;

    this.api.getCount().subscribe(count => this.heroesCount = count);

    this.route.params
      .subscribe(params => {
        const id = +params['id'];
        if (!id) {
          this.router.navigate(['/heroes', this.currentHero]);
        } else {
          this.api.getHero(id);
          this.currentHero = id;
        }
      });

    this.api.getHeroId()
      .subscribe(heroId => this.router.navigate(['/heroes', heroId]));

    this.hero$ = this.api.subscribeHero();
    this.hero$.subscribe(hero => {
      this.hero = hero;
      this.loading = false;
    });
  }

  public handleClick(state) {
    if (this.loading) {
      return;
    }

    state
      ? this.router.navigate(['/heroes', ++this.currentHero])
      : this.router.navigate(['/heroes', --this.currentHero]);

    this.loading = true;
  }

  public openHelp() {
    this.shouldShowHelp = true
  }

  public closeHelp() {
    this.shouldShowHelp = false;
    console.log('called');
  }
}
