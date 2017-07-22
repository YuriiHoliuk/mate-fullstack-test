import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpService {

  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x-requested-with', 'XMLHttpRequest');
  }

  post(url: string, data: Object) {
    return this.http
      .post(url, JSON.stringify(data), {headers: this.headers, withCredentials: true});
  }

  get(url: string) {
    return this.http
      .get(url, {headers: this.headers, withCredentials: true});
  }

}
