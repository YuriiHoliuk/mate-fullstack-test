import {Component, OnInit} from '@angular/core';
import {ApiService} from './services';
import {Observable} from 'rxjs/Observable';
import {Hero} from './classes';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private hero$: Observable<Hero>;
  private heroesCount: number;
  private heroId: number;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.hero$ = this.api.subscribeHero();

    this.api.getCount().subscribe(count => this.heroesCount = count);
    this.api.getHeroId().subscribe(id => {
      this.heroId = id;
      this.api.getHero(this.heroId);
    });
    this.hero$.subscribe(hero => console.log(hero));
  }
}
