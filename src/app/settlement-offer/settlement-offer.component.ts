import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settlement-offer',
  templateUrl: './settlement-offer.component.html',
  styleUrls: ['./settlement-offer.component.css']
})

export class SettlementOfferComponent implements OnInit {

  constructor(private router:Router) { }
  gotoSettlementTable(){
    this.router.navigate(["/settlement-table"])
  }
 

  ngOnInit(): void {
  }

}
