import { Routes } from '@angular/router';

import { EditCvComponent } from './edit-cv.component';

export const EditCvRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: EditCvComponent
    }]
}
];