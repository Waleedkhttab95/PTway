import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdModule } from '../md/md.module';
import { MaterialModule } from '../app.module';
import { DashboardRoutes } from './dashboard.routing';
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    FormsModule,
    MdModule,
    MaterialModule
  ]
})
export class DashboardModule { }
