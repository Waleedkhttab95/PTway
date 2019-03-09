import { Routes } from '@angular/router';

import { JobOfferPreviewComponent } from './job-offer-preview.component';

export const JobOfferPreviewRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: JobOfferPreviewComponent
        }]
    }
];