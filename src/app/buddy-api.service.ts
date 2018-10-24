import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from './catalog';
import { Transaction } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class BuddyAPIService {

  baseURL = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

   getCatalog(): Observable<Catalog[]> {

      return this.http.get<Catalog[]>(this.baseURL + 'medBuddy');
   }

   getTxHistory(): Observable<Transaction[]> {

    return this.http.get<Transaction[]>(this.baseURL + 'history');
 }

}
