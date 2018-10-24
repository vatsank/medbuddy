import { CompCommunicationService } from './../comp-communication.service';
import { Pagelink } from './../pagelink';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   @Input() linkReferences: Pagelink[];
  showLogin = true;
  showLogout = false;

  constructor(private service: CompCommunicationService) {


  }

  ngOnInit() {

    this.service.loginStatus.subscribe(resp => {

      if (resp === 'logged') {
        this.showLogin = false;
        this.showLogout = true;
      } else if(resp === 'logout') {
        this.showLogin = true;
        this.showLogout = false;
      }
    });
  }

}
