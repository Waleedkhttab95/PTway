import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersListComponent } from './offers-list.component';


import {OffersListRoutes} from './offers-list.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [OffersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(OffersListRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class OffersListModule { }
