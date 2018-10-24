import { Component, OnInit } from '@angular/core';
import {Doctor} from '../doctor';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  doctorList: Doctor[];
  doctor = 'assets/images/doctor.jpg';
  codeNumber = 0;
  srchResult: string;


  constructor() {

    const  ent = {id: 101, doctorName:
      'Ramesh', specialization: 'ENT',
     mobileNumber: 945095858};
     const skin = {id: 102, doctorName:
      'Skin', specialization: 'Dermatologist',
     mobileNumber: 745095858};

     this.doctorList = [ent, skin];

   }

  ngOnInit() {
  }

  onChange(val: string): void {

     this.srchResult = val;
  }
}
