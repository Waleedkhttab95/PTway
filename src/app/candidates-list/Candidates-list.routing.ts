import { Routes } from '@angular/router';

import { CandidatesListComponent } from './candidates-list.component';

export const CandidatesListRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: CandidatesListComponent
    }]
}
];