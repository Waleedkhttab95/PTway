import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOfferComponent } from './job-offer.component';
import {JobOfferRoutes} from './job-offer.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [JobOfferComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(JobOfferRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class JobOfferModule { }
