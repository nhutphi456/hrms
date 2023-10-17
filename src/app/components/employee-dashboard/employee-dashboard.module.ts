import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { ShareModule } from '../share/share.module';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { EmployeeInfoCardComponent } from './components/employee-info-card/employee-info-card.component';
import { JobTagComponent } from './components/job-tag/job-tag.component';


@NgModule({
  declarations: [
    EmployeeDashboardComponent,
    EmployeeInfoCardComponent,
    JobTagComponent,
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
