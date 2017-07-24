import {IVehicle} from '../interfaces';

export class Vehicle implements IVehicle {

  public name: string;
  public model: string;

  constructor(venichle) {
    this.name = venichle.name;
    this.model = venichle.model;
  }
}
