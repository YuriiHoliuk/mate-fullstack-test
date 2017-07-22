import { Injectable } from '@angular/core';
import {HttpService} from './http.service';

@Injectable()
export class ApiService {

  constructor(private http: HttpService) { }

}
