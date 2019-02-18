import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJobComponent } from './add-job.component';
import { AddJobRoutes } from './add-job.routing';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [AddJobComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AddJobRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class AddJobModule { }
