import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { PaginatedData } from 'src/app/models/global.model';
import { defaultTable as defaultTableData } from '../constants/employee-summary-dashboard.constant';
import {
  IEmployeeScoreParams,
  IEmployeeSkillScore,
} from '../models/employee-summary-dashboard';
import { EmDashboardSummaryService } from '../services/epl-dashboard-summary.service';

interface EplSummaryDashboardState {
  employeeHighestSkills: PaginatedData<IEmployeeSkillScore>;
  employeeTargetSkills: PaginatedData<IEmployeeSkillScore>;
  employeeImproveSkills: PaginatedData<IEmployeeSkillScore>;
}
@Injectable({
  providedIn: 'root',
})
export class EplSummaryDashboardStore extends ComponentStore<EplSummaryDashboardState> {
  constructor(private summaryService: EmDashboardSummaryService) {
    super({
      employeeHighestSkills: defaultTableData,
      employeeTargetSkills: defaultTableData,
      employeeImproveSkills: defaultTableData,
    });
  }

  //SELECTOR
  readonly employeeHighestSkills$: Observable<
    PaginatedData<IEmployeeSkillScore>
  > = this.select(state => state.employeeHighestSkills);
  readonly employeeTargetSkills$: Observable<
    PaginatedData<IEmployeeSkillScore>
  > = this.select(state => state.employeeTargetSkills);
  readonly employeeImproveSkills$: Observable<
    PaginatedData<IEmployeeSkillScore>
  > = this.select(state => state.employeeImproveSkills);

  //UPDATER
  readonly setEmployeeHighestSkills = this.updater(
    (
      state: EplSummaryDashboardState,
      employeeHighestSkills: PaginatedData<IEmployeeSkillScore>,
    ) => {
      return {
        ...state,
        employeeHighestSkills,
      };
    },
  );
  readonly setEmployeeTargetSkills = this.updater(
    (
      state: EplSummaryDashboardState,
      employeeTargetSkills: PaginatedData<IEmployeeSkillScore>,
    ) => {
      return {
        ...state,
        employeeTargetSkills,
      };
    },
  );

  readonly setEmployeeImproveSkills = this.updater(
    (
      state: EplSummaryDashboardState,
      employeeImproveSkills: PaginatedData<IEmployeeSkillScore>,
    ) => {
      return {
        ...state,
        employeeImproveSkills,
      };
    },
  );
  //EFFECT
  readonly getTopPerformers = this.effect(
    (params$: Observable<IEmployeeScoreParams>) =>
      params$.pipe(
        switchMap(params =>
          this.summaryService.getEmployeeHighestSkills(params).pipe(
            tapResponse({
              next: res =>
                this.setEmployeeHighestSkills(res.topHighestSkillSetEmployee),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );

  readonly getEmployeeTargetSkills = this.effect(
    (params$: Observable<IEmployeeScoreParams>) =>
      params$.pipe(
        switchMap(params =>
          this.summaryService.getEmployeeTargetSkills(params).pipe(
            tapResponse({
              next: res =>
                this.setEmployeeTargetSkills(
                  res.topHighestSkillSetTargetEmployee,
                ),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );

  readonly getEmployeeImproveSkills = this.effect(
    (params$: Observable<IEmployeeScoreParams>) =>
      params$.pipe(
        switchMap(params =>
          this.summaryService.getEmployeeImproveSkills(params).pipe(
            tapResponse({
              next: res => this.setEmployeeImproveSkills(res.topKeenSkillSetEmployee),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );
}
