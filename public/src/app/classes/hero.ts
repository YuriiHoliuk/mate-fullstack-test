import {IHero} from '../interfaces';
import {Planet, Species, Vehicle, Starship, Film} from './';

export class Hero implements IHero {

  public name: string;
  public gender: string;
  public birth_year: string;
  public height: number;
  public mass: number;
  public homeworld: Planet;
  public films: Film[];
  public species: Species;
  public vehicles: Vehicle[];
  public starships: Starship[];

  constructor(hero: any) {
    this.name = hero.name;
    this.gender = hero.gender;
    this.birth_year = hero.birth_year;
    this.height = parseFloat(hero.height);
    this.mass = parseFloat(hero.mass);
    this.homeworld = hero.homeworld;
    this.films = hero.films;
    this.species = hero.species;
    this.vehicles = hero.vehicles;
    this.starships = hero.starships;
  }
}
