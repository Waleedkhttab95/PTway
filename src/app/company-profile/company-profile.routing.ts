import { Routes } from '@angular/router';
import { CompanyProfileComponent } from './company-profile.component';


export const CompanyProfileRoutes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: CompanyProfileComponent
        }]
    }
];