import {IHero} from '../interfaces';

export class Hero implements IHero {

  public name: string;
  public gender: string;
  public birth_year: string;
  public height: number;
  public mass: number;
  public homeworld: string;
  public films: string[];
  public species: string;
  public venichles: string[];
  public starships: string[];

  constructor(hero: any) {
    this.name = hero.name;
    this.gender = hero.gender;
    this.birth_year = hero.birth_year;
    this.height = parseFloat(hero.height);
    this.mass = parseFloat(hero.mass);
    this.homeworld = hero.homeworld;
    this.films = hero.films;
    this.species = hero.species[0];
    this.venichles = hero.venichles;
    this.starships = hero.starships;
  }
}
