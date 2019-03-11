import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { UserComponent } from './layouts/user/user.component';
import { RegistrationComponent } from './layouts/registration/registration.component';
import {AuthGuard} from '../app/auth/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';




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
        canActivate:[AuthGuard],
        loadChildren: './add-project/add-project.module#AddProjectModule'
    }, {
        path: 'add-job',
        canActivate:[AuthGuard],
        loadChildren: './add-job/add-job.module#AddJobModule'
    }, {
        path: 'my-projects',
        canActivate:[AuthGuard],
        loadChildren: './my-projects/my-projects.module#MyProjectsModule'
    }, {
        path: 'job-offer-check',
        canActivate:[AuthGuard],
        loadChildren: './job-offer-check/job-offer-check.module#JobOfferCheckModule'
    }, {
        path: 'job-offer-preview',
        canActivate:[AuthGuard],
        loadChildren: './job-offer-preview/job-offer-preview.module#JobOfferPreviewModule'
    }, {
        path: 'my-offers',
        canActivate:[AuthGuard],
        loadChildren: './my-offers/my-offers.module#MyOffersModule'
    }, {
        path: 'candidates-list',
        canActivate:[AuthGuard],
        loadChildren: './candidates-list/candidates-list.module#CandidatesListModule'
    }, {
        path: 'acceptance-list',
        canActivate:[AuthGuard],
        loadChildren: './acceptance-list/acceptance-list.module#AcceptanceListModule'
    }, {
        path: 'error-message',
        loadChildren: './error-message/error-message.module#ErrorMessageModule'
    },  {
        path: 'company-profile',
        canActivate:[AuthGuard],
        loadChildren: './company-profile/company-profile.module#CompanyProfileModule'
    } , {
        path: 'edit-company-profile',
        canActivate:[AuthGuard],
        loadChildren: './edit-company-profile/edit-company-profile.module#EditCompanyProfileModule'
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
        } , {
            path: 'job-offer',
            loadChildren: './job-offer/job-offer.module#JobOfferModule'
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

