import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CollectionsComponent } from './collections/collections.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { WorkingComponent } from './working/working.component';
import { SettlementOfferComponent } from './settlement-offer/settlement-offer.component';
import { SettlementTableComponent } from './settlement-table/settlement-table.component';
import { SettlepagePipe } from './settlepage.pipe';
import { RecoveryComponent } from './recovery/recovery.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CollectionsComponent,
    SidebarComponent,
    HeaderComponent,
    MainBodyComponent,
    WorkingComponent,
    SettlementOfferComponent,
    SettlementTableComponent,
    SettlepagePipe,
    FilterPipe,
    RecoveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"working",
        component: WorkingComponent
      },
      {
        path:'',
        redirectTo:'/working',
        pathMatch:'full'
      },
     
      
 
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
