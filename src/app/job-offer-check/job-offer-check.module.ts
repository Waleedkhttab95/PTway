import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOfferCheckComponent } from './job-offer-check.component';

import {JobOfferCheckRoutes} from './job-offer-check.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [JobOfferCheckComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(JobOfferCheckRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class JobOfferCheckModule { }
