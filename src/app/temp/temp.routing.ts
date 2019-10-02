import { Routes } from '@angular/router';

import {tempComponent } from './temp.component';

export const tempRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: tempComponent
    }]
}
];