import { Routes } from '@angular/router';
import { AddJobComponent } from './add-job.component';

export const AddJobRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: AddJobComponent
        }]
    }
];