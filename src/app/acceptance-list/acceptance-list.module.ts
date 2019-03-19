import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceptanceListComponent } from './acceptance-list.component';
import {AcceptanceListRoutes} from './acceptance-list.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
@NgModule({
  declarations: [AcceptanceListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AcceptanceListRoutes),
    FormsModule,
    MaterialModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ]
})
export class AcceptanceListModule { }
