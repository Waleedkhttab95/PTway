import { Routes } from '@angular/router';
import { CvPreviewComponent } from './cv-preview.component';


export const CvPreviewRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: CvPreviewComponent
    }]
}
];