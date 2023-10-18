import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeSummaryDashboardRoutingModule } from './employee-summary-dashboard-routing.module';
import { EmployeeSummaryDashboardComponent } from './employee-summary-dashboard.component';
import { ShareModule } from 'src/app/components/share/share.module';
import { EmployeeAtGlanceComponent } from './components/employee-at-glance/employee-at-glance.component';


@NgModule({
  declarations: [EmployeeSummaryDashboardComponent, EmployeeAtGlanceComponent],
  imports: [
    CommonModule,
    EmployeeSummaryDashboardRoutingModule,
    ShareModule
  ]
})
export class EmployeeSummaryDashboardModule { }
