import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckDepotComponent } from './pages/check-depot/check-depot.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [{
  path:'',
  component: DashboardComponent
},
{
  path:'check-depot',
  component: CheckDepotComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
