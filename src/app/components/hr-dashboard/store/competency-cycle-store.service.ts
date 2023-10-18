import { Injectable } from '@angular/core';
import {
  ICompanyCompletion,
  ICompetencyIncompletionStatus,
} from '../models/hr-dashboard.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { HrDashboardService } from '../services/hr-dashboard.service';

export interface ICompetencyCyleState {
  cycleStatus: {
    departmentInComplete: ICompetencyIncompletionStatus[];
    companyInComplete: ICompanyCompletion[];
  };
}
@Injectable({
  providedIn: 'root',
})
export class CompetencyCycleStore extends ComponentStore<ICompetencyCyleState> {
  constructor(private hrDashboardService: HrDashboardService) {
    super({
      cycleStatus: {
        departmentInComplete: [],
        companyInComplete: [],
      },
    });
  }

  //SELECTOR
  readonly cycleStatus$: Observable<{
    departmentInComplete: ICompetencyIncompletionStatus[];
    companyInComplete: ICompanyCompletion[];
  }> = this.select(state => state.cycleStatus);
  //UPDATER
  readonly setCycleStatus = this.updater(
    (
      state: ICompetencyCyleState,
      cycleStatus: {
        departmentInComplete: ICompetencyIncompletionStatus[];
        companyInComplete: ICompanyCompletion[];
      },
    ) => {
      return {
        ...state,
        cycleStatus,
      };
    },
  );
  //EFFECT
  readonly getDepartmentIncomplete = this.effect(
    (params$: Observable<number>) =>
      params$.pipe(
        switchMap(params =>
          this.hrDashboardService.getCompetencyIncompletionStatus(params).pipe(
            tapResponse({
              next: res =>
                this.setCycleStatus({
                  departmentInComplete: res.departmentInComplete,
                  companyInComplete: res.companyInComplete,
                }),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );
}
