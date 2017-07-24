import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

  private headers: Headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('x-requested-with', 'XMLHttpRequest');
  }

  post(url: string, data: Object): Observable<any> {
    return this.http
      .post(url, JSON.stringify(data), {headers: this.headers});
  }

  get(url: string): Observable<any> {
    return this.http
      .get(url, {headers: this.headers});
  }

}
