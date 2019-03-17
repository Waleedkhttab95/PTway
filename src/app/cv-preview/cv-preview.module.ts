import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvPreviewComponent } from './cv-preview.component';
import {CvPreviewRoutes} from './cv-preview.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [CvPreviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CvPreviewRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ]
})
export class CvPreviewModule { }
