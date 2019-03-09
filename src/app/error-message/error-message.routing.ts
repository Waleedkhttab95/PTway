import { Routes } from '@angular/router';

import { ErrorMessageComponent } from './error-message.component';

export const ErrorMessageRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: ErrorMessageComponent
        }]
    }
];