import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cv_tempComponent } from './cv-temp.component';
import {CvTempRoutes} from './cv-temp.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [cv_tempComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CvTempRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ]
})
export class CvTempModule { }
