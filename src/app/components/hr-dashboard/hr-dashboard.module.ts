import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { TimelineModule } from 'primeng/timeline';
import { NgApexchartsModule } from "ng-apexcharts";
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';

import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { HrDashboardRoutingModule } from './hr-dashboard-routing.module';
import { HrDashboardComponent } from './hr-dashboard.component';
import { HrOverviewComponent } from './components/hr-overview/hr-overview.component';
import { CompetencyLevelComponent } from './components/competency-level/competency-level.component';
import { CompetencyLevelByUnitComponent } from './components/competency-level-by-unit/competency-level-by-unit.component';
import { TopSkillsComponent } from './components/top-skills/top-skills.component';
import { ShareModule } from '../share/share.module';
import { CompetencyReviewCycleComponent } from './components/competency-review-cycle/competency-review-cycle.component';
import { TimeLineComponent } from './components/time-line/time-line.component';
import { TopPerformersComponent } from './components/top-performers/top-performers.component';
import { TopCompetenciesComponent } from './components/top-competencies/top-competencies.component';
import { EmployeePerformanceGridBoxComponent } from './components/employee-performance-grid-box/employee-performance-grid-box.component';
import { PerformanceByJobLevelComponent } from './components/performance-by-job-level/performance-by-job-level.component';
import { TopTablePopupComponent } from './components/top-table-popup/top-table-popup.component';
import { PositionFilterComponent } from './components/position-filter/position-filter.component';
import { DashboardDepartmentFilterComponent } from './components/dashboard-department-filter/dashboard-department-filter.component';


@NgModule({
  declarations: [
    HrDashboardComponent,
    HrOverviewComponent,
    CompetencyReviewCycleComponent,
    TimeLineComponent,
    CompetencyLevelComponent,
    CompetencyLevelByUnitComponent,
    TopSkillsComponent,
    TopPerformersComponent,
    TopCompetenciesComponent,
    EmployeePerformanceGridBoxComponent,
    PerformanceByJobLevelComponent,
    TopTablePopupComponent,
    PositionFilterComponent,
    DashboardDepartmentFilterComponent,
  ],
  imports: [
    CommonModule,
    HrDashboardRoutingModule,
    AppTopbarModule,
    CalendarModule,
    FormsModule,
    TimelineModule,
    NgApexchartsModule,
    DropdownModule,
    ShareModule,
    AvatarModule,
    OverlayPanelModule,
    RadioButtonModule,
    ReactiveFormsModule,
    DialogModule,
    MultiSelectModule
  ]
})
export class HrDashboardModule { }
