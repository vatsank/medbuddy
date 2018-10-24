import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompCommunicationService {

  loginStatus: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor() {
    }

     changeStatus(status: string) {
       this.loginStatus.next(status);
     }
  }
