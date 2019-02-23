import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

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
        path: 'candidates-list',
        loadChildren: './candidates-list/candidates-list.module#CandidatesListModule'
    }, {
        path: 'acceptance-list',
        loadChildren: './acceptance-list/acceptance-list.module#AcceptanceListModule'
    }, {
        path: 'error-message',
        loadChildren: './error-message/error-message.module#ErrorMessageModule'
    }, {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
    }, {
        path: 'forms',
        loadChildren: './forms/forms.module#Forms'
    }, {
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    }, {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
    }, {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    }, {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    }, {
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
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
      }]
    }
];
