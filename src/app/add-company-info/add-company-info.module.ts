import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyInfoComponent } from './add-company-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { AddCompanyInfoRoutes } from './add-company-info.routing';
import { FormGroup } from '@angular/forms';



@NgModule({
  declarations: [AddCompanyInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AddCompanyInfoRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ]
})
export class AddCompanyInfoModule { }
