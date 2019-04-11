import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { FormGroup } from '@angular/forms';



import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../app.module';
import { MatProgressSpinnerModule } from '@angular/material';
import { VolContractComponent } from './volunteer.component';
import { VolunteerRoutes } from './volunteer.routing';

@NgModule({
  declarations: [VolContractComponent],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    RouterModule.forChild(VolunteerRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
  ]
})
export class VolunteerModule { }
