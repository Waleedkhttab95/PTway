import { Routes } from '@angular/router';

import { AddProjectComponent } from './add-project.component';

export const AddProjectRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: AddProjectComponent
    }]
}
];