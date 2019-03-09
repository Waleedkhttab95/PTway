import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOfferPreviewComponent } from './job-offer-preview.component';

import {JobOfferPreviewRoutes} from './job-offer-preview.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [JobOfferPreviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(JobOfferPreviewRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class JobOfferPreviewModule { }
