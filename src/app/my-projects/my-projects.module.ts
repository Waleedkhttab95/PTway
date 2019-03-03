import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects.component';

import {MyProjectsRoutes} from './my-projects.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';

@NgModule({
  declarations: [MyProjectsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MyProjectsRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class MyProjectsModule { }
