import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { TimelineModule } from 'primeng/timeline';
import { NgApexchartsModule } from "ng-apexcharts";
import { DropdownModule } from 'primeng/dropdown';

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


@NgModule({
  declarations: [
    HrDashboardComponent,
    HrOverviewComponent,
    CompetencyReviewCycleComponent,
    TimeLineComponent,
    CompetencyLevelComponent,
    CompetencyLevelByUnitComponent,
    TopSkillsComponent
  ],
  imports: [
    CommonModule,
    HrDashboardRoutingModule,
    AppTopbarModule,
    ChartModule,
    CalendarModule,
    FormsModule,
    TimelineModule,
    NgApexchartsModule,
    DropdownModule,
    ShareModule
  ]
})
export class HrDashboardModule { }
