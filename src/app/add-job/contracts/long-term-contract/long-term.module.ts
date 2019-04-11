import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LongTermComponent } from './long-term.component';
import { ShortTermRoutes } from './long-term.routing';



import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';
import { SelectModule } from 'ng2-select';
import { FormGroup } from '@angular/forms';



import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../app.module';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [LongTermComponent],
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    RouterModule.forChild(ShortTermRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule,
  ]
})
export class LongTermModule { }
