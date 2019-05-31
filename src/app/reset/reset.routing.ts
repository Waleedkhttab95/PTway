import { Routes } from '@angular/router';

import { resetComponent } from './reset.component';

export const resetRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: resetComponent
    }]
}
];