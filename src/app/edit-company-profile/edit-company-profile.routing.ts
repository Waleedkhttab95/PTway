import { Routes } from '@angular/router';
import { EditCompanyProfileComponent } from './edit-company-profile.component';


export const EditCompanyProfileRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: EditCompanyProfileComponent
        }]
    }
];