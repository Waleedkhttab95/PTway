import { Routes } from '@angular/router';

import { MyOffersComponent } from './my-offers.component';

export const MyOffersRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: MyOffersComponent
    }]
}
];