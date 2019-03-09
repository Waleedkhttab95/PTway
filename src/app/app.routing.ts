import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { UserComponent } from './layouts/user/user.component';
import { RegistrationComponent } from './layouts/registration/registration.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
    }, {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
        path: 'add-project',
        loadChildren: './add-project/add-project.module#AddProjectModule'
    }, {
        path: 'add-job',
        loadChildren: './add-job/add-job.module#AddJobModule'
    }, {
        path: 'my-projects',
        loadChildren: './my-projects/my-projects.module#MyProjectsModule'
    }, {
        path: 'my-offers',
        loadChildren: './my-offers/my-offers.module#MyOffersModule'
    }, {
        path: 'candidates-list',
        loadChildren: './candidates-list/candidates-list.module#CandidatesListModule'
    }, {
        path: 'acceptance-list',
        loadChildren: './acceptance-list/acceptance-list.module#AcceptanceListModule'
    }, {
        path: 'error-message',
        loadChildren: './error-message/error-message.module#ErrorMessageModule'
    },  {
        path: 'company-profile',
        loadChildren: './company-profile/company-profile.module#CompanyProfileModule'
    }
  ]}, {
      path: '',
      component: AuthLayoutComponent,
      children: [
          {
        path: 'sign-up',
        loadChildren: './sign-up/sign-up.module#SignUpModule'
      }, {
        path: 'sign-in',
        loadChildren: './sign-in/sign-in.module#SignInModule'
      }
    ]}, {
        path: '',
        component: UserComponent,
        children: [
        {
            path: 'my-cv',
            loadChildren: './my-cv/my-cv.module#MyCvModule'
        } , {
            path: 'offers-list',
            loadChildren: './offers-list/offers-list.module#OffersListModule'
        } , {
            path: 'edit-cv',
            loadChildren: './edit-cv/edit-cv.module#EditCvModule'
        }
      ]} , {
        path: '',
        component: RegistrationComponent,
        children: [
            {
          path: 'add-company-info',
          loadChildren: './add-company-info/add-company-info.module#AddCompanyInfoModule'
        }, {
            path: 'add-user-info',
            loadChildren: './add-user-info/add-user-info.module#AddUserInfoModule'
        }
      ]}
];
