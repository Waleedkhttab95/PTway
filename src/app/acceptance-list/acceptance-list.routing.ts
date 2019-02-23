import { Routes } from '@angular/router';

import { AcceptanceListComponent } from './acceptance-list.component';

export const AcceptanceListRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: AcceptanceListComponent
    }]
}
];