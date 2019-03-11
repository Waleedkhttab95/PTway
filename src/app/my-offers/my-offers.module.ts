import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOffersComponent } from './my-offers.component';
import {MyOffersRoutes} from './my-offers.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  declarations: [MyOffersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MyOffersRoutes),
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
export class MyOffersModule { }
