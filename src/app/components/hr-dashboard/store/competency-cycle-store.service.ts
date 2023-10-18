import { Injectable } from '@angular/core';
import { ICompetencyIncompletionStatus } from '../models/hr-dashboard.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { HrDashboardService } from '../services/hr-dashboard.service';

export interface ICompetencyCyleState {
  departmentInComplete: ICompetencyIncompletionStatus[];
}
@Injectable({
  providedIn: 'root',
})
export class CompetencyCycleStore extends ComponentStore<ICompetencyCyleState> {
  constructor(private hrDashboardService: HrDashboardService) {
    super({
      departmentInComplete: [],
    });
  }

  //SELECTOR
  readonly departmentInComplete$: Observable<ICompetencyIncompletionStatus[]> =
    this.select(state => state.departmentInComplete);
  //UPDATER
  readonly setDepartmentIncomplete = this.updater(
    (
      state: ICompetencyCyleState,
      departmentInComplete: ICompetencyIncompletionStatus[],
    ) => {
      return {
        ...state,
        departmentInComplete,
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
              next: res => this.setDepartmentIncomplete(res.departmentInComplete),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );
}
