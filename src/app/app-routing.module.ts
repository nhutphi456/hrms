import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then(m => m.LoginModule),
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'employee-management',
        loadChildren: () =>
          import(
            './components/employee-management/employee-management.module'
          ).then(m => m.EmployeeManagementModule),
      },
      {
        path: 'system-admin',
        loadChildren: () =>
          import('./components/system-admin/system-admin.module').then(
            m => m.SystemAdminModule,
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/hr-dashboard/hr-dashboard.module').then(
            m => m.HrDashboardModule,
          ),
      },
      {
        path: 'my-dashboard',
        loadChildren: () => import('./components/employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardModule)
      }
    ],
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./components/register/register.module').then(
        m => m.RegisterModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
