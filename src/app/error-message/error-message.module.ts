import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message.component';

import {ErrorMessageRoutes} from './error-message.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ErrorMessageRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class ErrorMessageModule { }
