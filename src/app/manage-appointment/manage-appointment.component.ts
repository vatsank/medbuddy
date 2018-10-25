import { Appointment } from './../appointment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-appointment',
  templateUrl: './manage-appointment.component.html',
  styleUrls: ['./manage-appointment.component.css']
})
export class ManageAppointmentComponent implements OnInit {

  appointment: Appointment = {
    id: 0,
    patientName: '',
    consultation: '',
    date: new Date()
  };
  constructor() { }

  ngOnInit() {
  }

   submit(val) {
     console.log(val);
   }
}
