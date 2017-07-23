import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class StorageService {

  private key: string;
  private timeout: number;

  constructor() {
    this.key = environment.localeStorage.key;
    this.timeout = environment.localeStorage.timeout;
  }

  read(): any {
    let data: any = localStorage.getItem(this.key);
    const now = Date.now();
    data = JSON.parse(data);

    if (!data || now - data.timestamp > this.timeout) {
      return {lastHero: 1, newbie: true};
    } else {
      return {lastHero: +data.lastHero, newbie: false}
    }
  }

  write(lastHero): void {
    const value = {lastHero, newbie: false, timestamp: Date.now()};
    localStorage.setItem(this.key, JSON.stringify(value));
  }

}
