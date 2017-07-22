import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {Subject} from 'rxjs/Subject';
import {Hero} from '../classes';
import {environment} from '/environments/environment'

@Injectable()
export class ApiService {

  private baseUrl: string;
  private hero$: Subject<Hero>;

  constructor(private http: HttpService) {
    this.baseUrl = environment.api.base;
    this.hero$ = new Subject();
  }



}
