import { Routes } from '@angular/router';

import { MyProjectsComponent } from './my-projects.component';

export const MyProjectsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: MyProjectsComponent
    }]
}
];