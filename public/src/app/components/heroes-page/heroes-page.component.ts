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
  public newbie: boolean;
  private lastHero: number;

  private hero$: Observable<Hero>;
  public hero: Hero;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private api: ApiService,
              private storage: StorageService) {
  }

  ngOnInit() {
    const {newbie, lastHero} = this.storage.read();
    this.newbie = newbie;
    this.lastHero = lastHero;

    this.api.getCount().subscribe(count => this.heroesCount = count);

    this.route.params
      .subscribe(params => this.api.getHero(params['id']));

    this.api.getHeroId()
      .subscribe(heroId => this.router.navigate(['/heroes', heroId]));

    this.hero$ = this.api.subscribeHero();
    this.hero$.subscribe(hero => this.hero = hero);

  }

}
