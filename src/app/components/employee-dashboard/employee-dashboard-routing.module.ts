import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { EmployeeSummaryDashboardComponent } from './components/employee-summary-dashboard/employee-summary-dashboard.component';
import { EmployeeSkillsComponent } from './components/employee-skills/employee-skills.component';
import { EmployeeQualificationsComponent } from './components/employee-qualifications/employee-qualifications.component';
import { EmployeeAssessmentComponent } from './components/employee-assessment/employee-assessment.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent,
    data: { breadcrumbs: ['My Dashboard'] },
    children: [
      {
        path: '', // This is the empty path
        redirectTo: 'summary', // Redirect to the 'summary' route
        pathMatch: 'full', // Ensure a full match
      },
      {
        path: 'summary',
        component: EmployeeSummaryDashboardComponent,
      },
      {
        path: 'skills',
        component: EmployeeSkillsComponent,
      },
      {
        path: 'qualifications',
        component: EmployeeQualificationsComponent,
      },
      {
        path: 'assessment',
        component: EmployeeAssessmentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeDashboardRoutingModule {}
