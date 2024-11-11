import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CheckDepotComponent } from './check-depot/check-depot.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckDepotComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    RouterModule
  ],
})
export class PagesModule { }