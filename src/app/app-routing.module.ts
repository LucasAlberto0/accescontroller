import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckDepotComponent } from './pages/check-depot/check-depot.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EntryPageComponent } from './pages/entry-page/entry-page.component';
import { ExitPageComponent } from './pages/exit-page/exit-page.component';

const routes: Routes = [{
  path:'',
  component: DashboardComponent
},
{
  path:'check-depot',
  component: CheckDepotComponent
},
{
  path: 'entry',
  component: EntryPageComponent
},
{
  path: 'exit',
  component: ExitPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
