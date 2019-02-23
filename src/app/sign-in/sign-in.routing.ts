import { Routes } from '@angular/router';

import { SignInComponent } from './sign-in.component';

export const SignInRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: SignInComponent
    }]
}
];