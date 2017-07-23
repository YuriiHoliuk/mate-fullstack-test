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
  private heroId: number;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
  }
}
