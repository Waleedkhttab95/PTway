import { Routes } from '@angular/router';

import { SignUpComponent } from './sign-up.component';

export const SignUpRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: SignUpComponent
    }]
}
];