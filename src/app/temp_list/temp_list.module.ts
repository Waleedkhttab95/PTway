import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempListComponent } from './temp_list.component';
import {TempListRoutes} from './temp_list.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';


@NgModule({
  declarations: [TempListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TempListRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class tempListModule { }
