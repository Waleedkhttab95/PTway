import { Routes } from '@angular/router';

import { resetPasswordComponent } from './resetPassword.component';

export const resetPasswordRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: resetPasswordComponent
    }]
}
];