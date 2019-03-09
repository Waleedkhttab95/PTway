import { Routes } from '@angular/router';

import { JobOfferCheckComponent } from './job-offer-check.component';

export const JobOfferCheckRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: JobOfferCheckComponent
        }]
    }
];