import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-find-service-area',
  templateUrl: './find-service-area.component.html',
  styleUrls: ['./find-service-area.component.css']
})
export class FindServiceAreaComponent implements OnInit {

    @Input() pinCode: number;
    @Output() response: EventEmitter<string> =
                       new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

   sendResponse() {
    let status = 'Service IS NOT Available';
     if (this.pinCode == 600117) {
         status = 'Service Is Available';
     }
     this.response.emit('In ' + this.pinCode + ' ' + status);
   }
}
