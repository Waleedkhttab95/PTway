import { Routes } from '@angular/router';

import { TempListComponent } from './temp_list.component';

export const TempListRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: TempListComponent
    }]
}
];