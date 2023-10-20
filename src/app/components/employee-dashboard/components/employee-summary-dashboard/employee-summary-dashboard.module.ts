import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { EmployeeSummaryDashboardRoutingModule } from './employee-summary-dashboard-routing.module';
import { EmployeeSummaryDashboardComponent } from './employee-summary-dashboard.component';
import { ShareModule } from 'src/app/components/share/share.module';
import { EmployeeAtGlanceComponent } from './components/employee-at-glance/employee-at-glance.component';
import { EmployeeCompetencyOverallScoreComponent } from './components/employee-competency-overall-score/employee-competency-overall-score.component';
import { EmployeePerformanceScoreChartComponent } from './components/employee-performance-score-chart/employee-performance-score-chart.component';
import { EmployeeScoreTableComponent } from './components/employee-score-table/employee-score-table.component';
import { EmployeeSkillStatisticComponent } from './components/employee-skill-statistic/employee-skill-statistic.component';


@NgModule({
  declarations: [EmployeeSummaryDashboardComponent, EmployeeAtGlanceComponent, EmployeeCompetencyOverallScoreComponent, EmployeePerformanceScoreChartComponent, EmployeeScoreTableComponent, EmployeeSkillStatisticComponent],
  imports: [
    CommonModule,
    EmployeeSummaryDashboardRoutingModule,
    ShareModule,
    ButtonModule,
    DialogModule
  ]
})
export class EmployeeSummaryDashboardModule { }
