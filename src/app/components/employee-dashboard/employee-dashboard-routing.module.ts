import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent,
    data: { breadcrumbs: ['My Dashboard'] },
    children: [
      {
        path: '',
        redirectTo: 'summary',
        pathMatch: 'full',
      },
      {
        path: 'summary',
        loadChildren: () =>
          import(
            './components/employee-summary-dashboard/employee-summary-dashboard.module'
          ).then(m => m.EmployeeSummaryDashboardModule),
      },
      {
        path: 'skills',
        loadChildren: () =>
          import('./components/employee-skills/employee-skills.module').then(
            m => m.EmployeeSkillsModule,
          ),
      },
      {
        path: 'qualifications',
        loadChildren: () =>
          import(
            './components/employee-qualifications/employee-qualifications.module'
          ).then(m => m.EmployeeQualificationsModule),
      },
      {
        path: 'assessment',
        loadChildren: () =>
          import(
            './components/employee-assessment/employee-assessment.module'
          ).then(m => m.EmployeeAssessmentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDashboardRoutingModule {}
