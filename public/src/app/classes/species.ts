import {ISpecies} from '../interfaces';

export class Species implements ISpecies {

  public name: string;

  constructor(species) {
    this.name = species.name;
  }
}
