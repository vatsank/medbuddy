import { ShowLocationComponent } from './../show-location/show-location.component';
import { ComponentAdderService } from './../component-adder.service';
import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
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
  //@ViewChild('temp1', { read: TemplateRef }) temp: TemplateRef<any>;

  @ViewChild('locationInfo', {read: ViewContainerRef}) refToView: ViewContainerRef;

  constructor(private adderService:ComponentAdderService) {

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

  add(){

    this.adderService.setViewRef(this.refToView);
    this.adderService.addComponent(ShowLocationComponent);

  }

  ngAfterViewInit(): void {

     //   console.log(this.temp);
  }
}
