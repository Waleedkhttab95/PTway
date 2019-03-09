import { Routes } from '@angular/router';
import { AddCompanyInfoComponent } from './add-company-info.component';


export const AddCompanyInfoRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: AddCompanyInfoComponent
        }]
    }
];