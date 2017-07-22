import {IFilm} from '../interfaces';

export class Film implements IFilm {

  public title: string;
  public episodeId: number;

  constructor(film: any) {
    this.title = film.title;
    this.episodeId = parseInt(film.episode_id, 10);
  }
}
