import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileComponent } from './company-profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyProfileRoutes } from './company-profile.routing';

@NgModule({
  declarations: [CompanyProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CompanyProfileRoutes),
    FormsModule
  ]
})
export class CompanyProfileModule { }
