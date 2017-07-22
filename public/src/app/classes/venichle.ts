import {IVenichle} from '../interfaces';

export class Venichle implements IVenichle {

  public name: string;
  public model: string;

  constructor(venichle) {
    this.name = venichle.name;
    this.model = venichle.model;
  }
}
