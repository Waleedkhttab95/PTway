import { Routes } from '@angular/router';
import { LongTermComponent } from './long-term.component';

export const ShortTermRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: LongTermComponent
        }]
    }
];