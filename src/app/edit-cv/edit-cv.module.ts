import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCvComponent } from './edit-cv.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { EditCvRoutes } from './edit-cv.routing';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [EditCvComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EditCvRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ]
})
export class EditCvModule { }
