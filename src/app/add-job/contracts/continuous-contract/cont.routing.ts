import { Routes } from '@angular/router';
import {  ContinuousComponent } from './cont.component';

export const ContinuousRoutes: Routes = [
    {

        path: '',
        children: [{
            path: '',
            component: ContinuousComponent
        }]
    }
];