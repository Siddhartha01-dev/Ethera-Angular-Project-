import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { SettlementTableComponent } from './settlement-table/settlement-table.component';
import { WorkingComponent } from './working/working.component';
const routes: Routes = [
  {
    component: WorkingComponent,
    path: 'working'
  },
  {
    component: RecoveryComponent,
    path: 'recovery'
  },
  {
    path: 'collections',
    component: CollectionsComponent
  },
  {
    path: 'settlement-table',
    component: SettlementTableComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
