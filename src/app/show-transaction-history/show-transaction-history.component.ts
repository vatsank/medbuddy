import { FormGroup } from '@angular/forms';
import { Transaction } from './../transaction';
import { BuddyAPIService } from './../buddy-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-transaction-history',
  templateUrl: './show-transaction-history.component.html',
  styleUrls: ['./show-transaction-history.component.css']
})
export class ShowTransactionHistoryComponent implements OnInit {
  hisdata: Transaction[];
  srchCondition = '';
  regForm: FormGroup = new FormGroup({});

  p =0;
  constructor(private service:BuddyAPIService) {


   }

  ngOnInit() {

    this.service.getTxHistory().subscribe(resp => this.hisdata = resp

    );
  }

}
