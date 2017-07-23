import {IPlanet, ISpecies, IVehicle, IStarship, IFilm} from './';

export interface IHero {
  name: string;
  gender: string;
  birth_year: string;
  height: number;
  mass: number;
  homeworld: IPlanet;
  films: IFilm[];
  species: ISpecies;
  vehicles: IVehicle[];
  starships: IStarship[];
}
