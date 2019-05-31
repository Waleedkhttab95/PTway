import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './About-us.component';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AboutusRoutes } from './About-us.routing';


@NgModule({
  declarations: [AboutusComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AboutusRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AboutusModule { }
