import { TestimonyComponent } from './../testimony/testimony.component';
import { Component, OnInit, OnChanges, SimpleChanges, Input, OnDestroy, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { TestimonyComponent } from '../testimony/testimony.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges , OnDestroy, AfterViewInit{

@ViewChild(TestimonyComponent) child : TestimonyComponent;

  @Input() city;
  data: any[];
  constructor(private cd :ChangeDetectorRef) {

    alert('constructor called');
    console.log('constructor called');
   }

   ngOnChanges(changes: SimpleChanges) {

    alert('on change called');
     console.log('on change called');
   }
  ngOnInit() {

    alert('on init called');

    console.log('on init called');

  }
  ngAfterViewInit(): void {

    this.data = this.child.latest;
    this.cd.detectChanges();
    alert('after view called');
    console.log('after View called');



  }


  ngOnDestroy(): void {
    console.log('On Destroy Called')
    }
}
