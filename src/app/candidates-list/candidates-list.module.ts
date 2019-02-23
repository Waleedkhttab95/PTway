import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatesListComponent } from './candidates-list.component';
import {CandidatesListRoutes} from './Candidates-list.routing';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../app.module';


@NgModule({
  declarations: [CandidatesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CandidatesListRoutes),
    FormsModule,
    MaterialModule
  ]
})
export class CandidatesListModule { }
