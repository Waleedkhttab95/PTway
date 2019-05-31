import { Routes } from '@angular/router';

import { ConditionsComponent } from './Conditions.component';

export const ConditionsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ConditionsComponent
    }]
}
];