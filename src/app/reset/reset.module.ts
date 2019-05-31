import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resetComponent } from './reset.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { resetRoutes } from './reset.routing';


@NgModule({
  declarations: [resetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(resetRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class resetModule { }
