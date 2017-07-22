import {IPlanet} from '../interfaces';

export class Planet implements IPlanet {

  public name: string;

  constructor(planet: any) {
    this.name = planet.name;
  }
}
