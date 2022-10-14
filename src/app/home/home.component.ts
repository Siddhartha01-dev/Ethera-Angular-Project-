import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  user:string="user";
  rupee:string="rupee";
  selected:string="user";
  selectedCard:string="";
  onSubmit(ele:string){
    this.selected=ele;
  }

  ngOnInit(): void {
  }

}
