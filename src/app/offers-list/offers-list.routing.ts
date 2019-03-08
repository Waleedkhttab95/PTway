import { Routes } from '@angular/router';

import { OffersListComponent } from './offers-list.component';

export const OffersListRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: OffersListComponent
    }]
}
];