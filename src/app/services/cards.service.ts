import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat/Observable';
import { IfElse, TopCard } from '../models/ifElse.model';
import { map, catchError } from 'rxjs/operators';

const baseUrl = "https://1.api.fy23ey05.careers.ifelsecloud.com/";

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getAllTopCards(): Observable<IfElse> {
    return this.http.get<IfElse>(baseUrl);
  }
}
