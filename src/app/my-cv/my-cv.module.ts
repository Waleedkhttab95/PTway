import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCvComponent } from './my-cv.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { MyCvRoutes } from './my-cv.routing';
import { FormGroup } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [MyCvComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(MyCvRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ]
})
export class MyCvModule { }
