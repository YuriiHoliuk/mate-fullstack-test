import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../../classes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() hero: Hero;
  @Input() count: number;
  @Input() id: number;
  @Input() onClick: Function;
  @Input() shouldShowSpinner: boolean;

  constructor() { }

  ngOnInit() {
  }

}
