import { Pagelink } from './../pagelink';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   @Input() linkReferences: Pagelink[];
  constructor() { }

  ngOnInit() {
  }

}
