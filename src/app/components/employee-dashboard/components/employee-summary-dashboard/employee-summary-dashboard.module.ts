import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeSummaryDashboardRoutingModule } from './employee-summary-dashboard-routing.module';
import { EmployeeSummaryDashboardComponent } from './employee-summary-dashboard.component';


@NgModule({
  declarations: [EmployeeSummaryDashboardComponent],
  imports: [
    CommonModule,
    EmployeeSummaryDashboardRoutingModule
  ]
})
export class EmployeeSummaryDashboardModule { }
