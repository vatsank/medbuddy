import { Pagelink } from './../pagelink';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  heading = 'Medical Buddy';
  logo = 'assets/images/logo.jpg';
  links: Pagelink[];
  constructor() {

    this.links = [
      {linkRef: 'home.html', linkText: 'Home'},
      {linkRef: 'Dental.html', linkText: 'Dental'}

    ];
   }

  ngOnInit() {
  }

}
