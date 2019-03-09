import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditCompanyProfileComponent } from './edit-company-profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { EditCompanyProfileRoutes } from './edit-company-profile.routing';
import { FormGroup } from '@angular/forms';

@NgModule({
  declarations: [EditCompanyProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(EditCompanyProfileRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ]
})
export class EditCompanyProfileModule { }
