import {IStarship} from '../interfaces';

export class Starship implements IStarship{

  public name: string;
  public model: string;

  constructor(starship) {
    this.name = starship.name;
    this.model = starship.model;
  }
}
