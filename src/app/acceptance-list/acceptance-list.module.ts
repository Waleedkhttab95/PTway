import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptanceListComponent } from './acceptance-list.component';
import {AcceptanceListRoutes} from './acceptance-list.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [AcceptanceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AcceptanceListRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class AcceptanceListModule { }
