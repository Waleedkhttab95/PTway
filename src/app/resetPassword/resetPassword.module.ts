import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { resetPasswordComponent } from './resetPassword.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { resetPasswordRoutes } from './resetPassword.routing';


@NgModule({
  declarations: [resetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(resetPasswordRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class resetPasswordModule { }
