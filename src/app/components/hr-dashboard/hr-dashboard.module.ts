import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { TimelineModule } from 'primeng/timeline';

import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { CompetencyReviewCycleComponent } from './competency-review-cycle/competency-review-cycle.component';
import { HrDashboardRoutingModule } from './hr-dashboard-routing.module';
import { HrDashboardComponent } from './hr-dashboard.component';
import { HrOverviewComponent } from './hr-overview/hr-overview.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { CompetencyLevelComponent } from './competency-level/competency-level.component';


@NgModule({
  declarations: [
    HrDashboardComponent,
    HrOverviewComponent,
    CompetencyReviewCycleComponent,
    TimeLineComponent,
    CompetencyLevelComponent
  ],
  imports: [
    CommonModule,
    HrDashboardRoutingModule,
    AppTopbarModule,
    ChartModule,
    CalendarModule,
    FormsModule,
    TimelineModule
  ]
})
export class HrDashboardModule { }
