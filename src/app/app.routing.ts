import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { UserComponent } from './layouts/user/user.component';
import { RegistrationComponent } from './layouts/registration/registration.component';
import {AuthGuard} from '../app/auth/auth.guard';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Auth_company_Guard } from './auth/auth.company.guard';




export const AppRoutes: Routes = [
    {
      
      path: '',
      redirectTo: '/my-cv',
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
        canActivate:[Auth_company_Guard],
        loadChildren: './add-project/add-project.module#AddProjectModule'
    }, {
        path: 'add-job',
        canActivate:[Auth_company_Guard],
        loadChildren: './add-job/add-job.module#AddJobModule'
    }, {
        path: 'my-projects',
        canActivate:[Auth_company_Guard],
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
        canActivate:[Auth_company_Guard],
        loadChildren: './my-offers/my-offers.module#MyOffersModule'
    }, {
        path: 'candidates-list',
        canActivate:[Auth_company_Guard],
        loadChildren: './candidates-list/candidates-list.module#CandidatesListModule'
    }, {
        path: 'acceptance-list',
        canActivate:[Auth_company_Guard],
        loadChildren: './acceptance-list/acceptance-list.module#AcceptanceListModule'
    }, {
        path: 'error-message',
        loadChildren: './error-message/error-message.module#ErrorMessageModule'
    },  {
        path: 'company-profile',
        canActivate:[Auth_company_Guard],
        loadChildren: './company-profile/company-profile.module#CompanyProfileModule'
    } , {
        path: 'edit-company-profile',
        canActivate:[Auth_company_Guard],
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
            canActivate:[AuthGuard],
            loadChildren: './my-cv/my-cv.module#MyCvModule'
        } , {
            path: 'offers-list',
            canActivate:[AuthGuard],
            loadChildren: './offers-list/offers-list.module#OffersListModule'
        } , {
            path: 'edit-cv',
            canActivate:[AuthGuard],
            loadChildren: './edit-cv/edit-cv.module#EditCvModule'
        } , {
            path: 'job-offer',
            canActivate:[AuthGuard],
            loadChildren: './job-offer/job-offer.module#JobOfferModule'
        }
      ]} , {
        path: '',
        component: RegistrationComponent,
        children: [
            {
          path: 'add-company-info',
          canActivate:[Auth_company_Guard],
          loadChildren: './add-company-info/add-company-info.module#AddCompanyInfoModule'
        } , {
            path: 'add-user-info',
            canActivate:[AuthGuard],
            loadChildren: './add-user-info/add-user-info.module#AddUserInfoModule'
        } , {
            path: 'cv-preview',
            canActivate:[Auth_company_Guard],
            loadChildren: './cv-preview/cv-preview.module#CvPreviewModule'
        }
      ]}
];


