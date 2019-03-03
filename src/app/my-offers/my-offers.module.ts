import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOffersComponent } from './my-offers.component';
import {MyOffersRoutes} from './my-offers.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [MyOffersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MyOffersRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class MyOffersModule { }
