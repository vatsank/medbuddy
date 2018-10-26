import { BuddyAPIService } from './../buddy-api.service';
import { Component, OnInit } from '@angular/core';
import { Catalog } from '../catalog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-catalog',
  templateUrl: './show-catalog.component.html',
  styleUrls: ['./show-catalog.component.css']

})
export class ShowCatalogComponent implements OnInit {

  catalog: Catalog[];
  constructor(private service: BuddyAPIService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(rparams =>{

      const catId = rparams['code'];

      console.log(catId);
    });
  this.service.getCatalog().subscribe(
           resp => this.catalog = resp);
  }

}
