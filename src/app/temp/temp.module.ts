import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { tempComponent } from './temp.component';
import {tempRoutes} from './temp.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [tempComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(tempRoutes),
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatProgressSpinnerModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ]
})
export class tempModule { }
