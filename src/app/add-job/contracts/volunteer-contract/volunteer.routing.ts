import { Routes } from '@angular/router';
import { VolContractComponent } from './volunteer.component';

export const VolunteerRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: VolContractComponent
        }]
    }
];