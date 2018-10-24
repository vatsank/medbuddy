import { BuddyAPIService } from './../buddy-api.service';
import { Component, OnInit } from '@angular/core';
import { Catalog } from '../catalog';

@Component({
  selector: 'app-show-catalog',
  templateUrl: './show-catalog.component.html',
  styleUrls: ['./show-catalog.component.css']

})
export class ShowCatalogComponent implements OnInit {

  catalog: Catalog[];
  constructor(private service: BuddyAPIService) { }

  ngOnInit() {

  this.service.getCatalog().subscribe(
           resp => this.catalog = resp);
  }

}
