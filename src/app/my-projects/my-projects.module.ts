import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects.component';
import {MyProjectsRoutes} from './my-projects.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [MyProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MyProjectsRoutes),
    FormsModule,
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
export class MyProjectsModule { }
