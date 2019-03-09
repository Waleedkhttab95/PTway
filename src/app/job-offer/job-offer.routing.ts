import { Routes } from '@angular/router';

import { JobOfferComponent } from './job-offer.component';

export const JobOfferRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: JobOfferComponent
        }]
    }
];