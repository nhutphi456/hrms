import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { ShareModule } from '../share/share.module';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { EmployeeInfoCardComponent } from './components/employee-info-card/employee-info-card.component';
import { JobTagComponent } from './components/job-tag/job-tag.component';
import { EmployeeSummaryDashboardComponent } from './components/employee-summary-dashboard/employee-summary-dashboard.component';
import { EmployeeSkillsComponent } from './components/employee-skills/employee-skills.component';
import { EmployeeQualificationsComponent } from './components/employee-qualifications/employee-qualifications.component';
import { EmployeeAssessmentComponent } from './components/employee-assessment/employee-assessment.component';


@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    EmployeeInfoCardComponent,
    JobTagComponent,
    EmployeeSummaryDashboardComponent,
    EmployeeSkillsComponent,
    EmployeeQualificationsComponent,
    EmployeeAssessmentComponent
  ],
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule,
    ShareModule,
    AppTopbarModule,
    ButtonModule
  ]
})
export class EmployeeDashboardModule { }
