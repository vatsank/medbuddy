import { BuddyAPIService } from './../buddy-api.service';
import { Appointment } from './../appointment';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manage-appointment',
  templateUrl: './manage-appointment.component.html',
  styleUrls: ['./manage-appointment.component.css']
})
export class ManageAppointmentComponent implements OnInit {

  @ViewChild('f') form: any;
  appointment: Appointment = {
    id: 0,
    patientName: '',
    consultation: '',
    date: new Date()
  };
  editIdxPos: number;
  appointList: Appointment[] = [];

  consulChoice = ['Lab Test', 'Dentist', 'Home Visit', 'Ambulance'];

  btnText = 'Add';

  constructor(private service:BuddyAPIService) { }

  ngOnInit() {

    this.service.getAllAppointments().subscribe(resp => this.appointList = resp);
  }

  edit(appointment){

    this.appointment = appointment;
    this.btnText = 'update';
    this.editIdxPos = this.appointList.indexOf(appointment);

  }
  delete(appointment) {

    const idxPos = this.appointList.indexOf(appointment);

    this.service.cancelAppointment(appointment).subscribe(resp => {

       this.appointList.splice(idxPos, 1);
    });

  }
   submit(appointment) {
     console.log(appointment);

      if(this.btnText === 'Add') {
     this.service.addAppointment(appointment).subscribe(resp => {
       console.log(resp);
        this.appointList.push(resp);
        this.form.reset();
      });
    }
    if(this.btnText === 'update'){
          this.service.updateAppointment(appointment).subscribe(resp => {
            this.appointList[this.editIdxPos] = resp;
          });
    }
   }
}
