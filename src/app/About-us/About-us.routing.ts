import { Routes } from '@angular/router';

import { AboutusComponent } from './About-us.component';

export const AboutusRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: AboutusComponent
    }]
}
];