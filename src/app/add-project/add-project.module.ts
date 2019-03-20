import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProjectComponent } from './add-project.component';
import { AddProjectRoutes } from './add-project.routing';


import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [AddProjectComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(AddProjectRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AddProjectModule { }
