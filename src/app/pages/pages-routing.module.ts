import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckDepotComponent } from './check-depot/check-depot.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
