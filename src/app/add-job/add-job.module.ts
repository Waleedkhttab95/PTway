import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJobComponent } from './add-job.component';
import { AddJobRoutes } from './add-job.routing';



import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { FormGroup } from '@angular/forms';



import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [AddJobComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AddJobRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
  ]
})
export class AddJobModule { }
