import { Routes } from '@angular/router';
import { cv_tempComponent } from './cv-temp.component';


export const CvTempRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: cv_tempComponent
    }]
}
];