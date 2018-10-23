import { Component, OnInit } from '@angular/core';
import { Testimony } from '../testimony';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

   latest: Testimony[];
  constructor() {
    this.latest = this.getLatestComments();
  }

  ngOnInit() {
  }

  getLatestComments(): Testimony[] {

    const latest: Testimony[] = [
       {name: 'ramesh',
       comment: 'The Claims department was very prompt in resolving the issues'},
       {name: 'ganesh',
       comment: 'The Policy Document was received in record time'},
      ];


    return latest;
  }

}
