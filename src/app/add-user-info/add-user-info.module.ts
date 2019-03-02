import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserInfoComponent } from './add-user-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';
import { AddUserInfoRoutes } from './add-user-info.routing';
import { FormGroup } from '@angular/forms';
@NgModule({
  declarations: [AddUserInfoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(AddUserInfoRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
    MaterialModule
  ]
})
export class AddUserInfoModule { }
