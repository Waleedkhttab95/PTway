import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionsComponent } from './Conditions.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { ConditionsRoutes } from './Conditions.routing';


@NgModule({
  declarations: [ConditionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ConditionsRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ConditionsModule { }
