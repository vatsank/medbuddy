import { CompCommunicationService } from './../comp-communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: CompCommunicationService) { }

  ngOnInit() {
  }

   validate() {
      this.service.changeStatus('logged');
   }
}
