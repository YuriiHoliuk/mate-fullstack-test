import {Component, OnInit} from '@angular/core';
import * as cssReset from '@eaze/css-reset';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    cssReset();
  }
}
