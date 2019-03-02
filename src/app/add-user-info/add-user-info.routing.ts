import { Routes } from '@angular/router';
import { AddUserInfoComponent } from './add-user-info.component';


export const AddUserInfoRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: AddUserInfoComponent
    }]
}
];