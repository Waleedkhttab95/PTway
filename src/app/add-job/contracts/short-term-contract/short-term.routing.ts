import { Routes } from '@angular/router';
import { ShortTermComponent } from './short-term.component';

export const ShortTermRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: ShortTermComponent
        }]
    }
];