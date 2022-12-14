import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.css']
})
export class WorkingComponent implements OnInit {

  constructor() { }
  user:string="user";
  rupee:string="rupee";
  selected:string="user";
  selectedCard:string="";
  selectedTime:string="";
  onSubmit(ele:string){
    this.selected=ele;
  }

  cardDetails=[
    {
      "heading":"Total Accounts",
      "lac":"9.84 Lac",
      "per":"",
      "src":'assets/totalAccounts.png',
      "crore":"4,178.60 Cr",
      "info":"assets/info-d.png"
    },

    {
      "heading":"Total Engagement",
      "lac":"8.12 Lac",
      "per":"(81%)",
      "src":"assets/totalEngagement.png",
      "crore":"3,384.67 Cr",
      "info":"assets/info-d.png"

    },
    {
      "heading":"Total Login",
      "lac":"5.90 Lac",
      "per":"(74%)",
      "src":"assets/totalRegistered.png",
      "crore":"2,504.66 Cr",
      "info":"assets/info-d.png"

    },
    {
      "heading":"Digital Paid",
      "lac":"3.38 Lac",
      "per":"(65%)",
      "src":"assets/digitallyPaid.png",
      "crore":"1,628.03 Cr",
      "info":"assets/info-d.png"

    },
    {
      "heading":"Overall Resolved",
      "lac":"5.23 Lac",
      "per":"(52%)",
      "src":"assets/overallResolved.png",
      "crore":"2,172.80 Cr",
      "info":"assets/info-d.png"
    },


  ]

  ngOnInit(): void {
  }
  selectedInCard2:string="Credit Card";
  selectedInCard4:string="March'21";
  card2=[
    "Credit Card",
    "Loan"
  ]
   card3=[
    "Live",
    "Pre-NPA",
    "NPA"
  ]
  card4=[
    "March'21",
    "April'21",
    "May'21"
  ]

  listArray = [
    {
      id: 1,
    value: "Live", 
    checked: false
   }, 
    {
      id: 2,
      value: "Pre-NPA", 
      checked: true 
    }, 
    {
      id: 3, 
      value: "NPA", 
      checked: true
    }
  ]

  changeSelectCard3(){
    let date=new Date();
    this.selectedTime=date.toString();
    
   }

}
