import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from './catalog';
import { Transaction } from './transaction';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class BuddyAPIService {

  baseURL = 'http://localhost:3000/';

  appointURL = this.baseURL + 'appointments';

  hdrs = new HttpHeaders().set('content-type', 'application/json');

  constructor(private http: HttpClient) { }

   getCatalog(): Observable<Catalog[]> {

      return this.http.get<Catalog[]>(this.baseURL + 'medBuddy');
   }

   getTxHistory(): Observable<Transaction[]> {

    return this.http.get<Transaction[]>(this.baseURL + 'history');
 }

   getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(this.appointURL);

   }

   cancelAppointment(appointment: Appointment): Observable<Appointment> {

    const deleteURL = this.appointURL + '/' + appointment.id;
    return this.http.delete<Appointment>(deleteURL);

   }

   updateAppointment(appointment: Appointment){
    const updateURL = this.appointURL + '/' + appointment.id;
    return this.http.put<Appointment>(updateURL, appointment, {headers: this.hdrs});

   }

   addAppointment(appointment: Appointment): Observable<Appointment> {



    return this.http.post<Appointment>(this.appointURL, appointment, {headers: this.hdrs});
   }

}
