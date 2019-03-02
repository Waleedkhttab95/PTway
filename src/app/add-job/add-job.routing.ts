import { Routes } from '@angular/router';

import { AddJobComponent } from './add-job.component';
import { AuthGuard } from '../auth/auth.guard';

export const AddJobRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: AddJobComponent
    }]
}
];