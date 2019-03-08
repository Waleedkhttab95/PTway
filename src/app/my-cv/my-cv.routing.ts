import { Routes } from '@angular/router';
import { MyCvComponent } from './my-cv.component';


export const MyCvRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: MyCvComponent
    }]
}
];