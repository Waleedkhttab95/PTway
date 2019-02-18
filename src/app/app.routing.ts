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
        path: 'add-job',
        loadChildren: './add-job/add-job.module#AddJobModule'
    }, {
        path: 'add-project',
        loadChildren: './add-project/add-project.module#AddProjectModule'
    }, {
        path: 'calendar',
        loadChildren: './calendar/calendar.module#CalendarModule'
    }, {
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    }, {
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    }
  ]}, {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
