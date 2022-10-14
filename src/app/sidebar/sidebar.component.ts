import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { RecoveryComponent } from '../recovery/recovery.component';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }
 
  
  selectedComponent:string=""

  gotoHome(){
    this.router.navigate(["/working"])
  }

  gotoCollection(){
    this.router.navigate(["/collections"])
  }

  gotoRecovery(){
    this.router.navigate(["/recovery"])
  }

  gotoCampaign(){
    this.router.navigate(['/campaign'])
  }
  ngOnInit(): void {
  }

}
