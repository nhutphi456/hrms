import { Injectable } from '@angular/core';
import {
  Department,
  IPosition,
} from '../../employee-management/models/employee-management.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { EmployeeManagementService } from '../../employee-management/services/employee-management.service';
import { ICompetencyTimeline } from '../models/hr-dashboard.model';
import { HrDashboardService } from '../services/hr-dashboard.service';

export interface IHRDashboardShareState {
  departments: Department[];
  positions: IPosition[];
  competencyTimeline: ICompetencyTimeline[];
}

@Injectable({
  providedIn: 'root',
})
export class HrDashboardShareStoreService extends ComponentStore<IHRDashboardShareState> {
  constructor(private employeeMngmentService: EmployeeManagementService, private hrDashboardService: HrDashboardService) {
    super({
      departments: [],
      positions: [],
      competencyTimeline: []
    });
  }

  readonly departments$: Observable<Department[]> = this.select(
    state => state.departments,
  );

  readonly positions$: Observable<IPosition[]> = this.select(
    state => state.positions,
  );
  readonly competencyTimeline$: Observable<ICompetencyTimeline[]> = this.select(
    state => state.competencyTimeline,
  );

  readonly setDepartments = this.updater(
    (state: IHRDashboardShareState, departments: Department[]) => {
      return { ...state, departments };
    },
  );
  readonly setPositions = this.updater(
    (state: IHRDashboardShareState, positions: IPosition[]) => {
      return { ...state, positions };
    },
  );
  readonly setCompetencyTimeline = this.updater(
    (state: IHRDashboardShareState, competencyTimeline: ICompetencyTimeline[]) => {
      return {
        ...state,
        competencyTimeline,
      };
    },
  );

  readonly getDepartments = this.effect<void>(trigger$ =>
    trigger$.pipe(
      switchMap(() =>
        this.employeeMngmentService.getDepartments().pipe(
          tapResponse({
            next: res => this.setDepartments(res.departments),
            error: error => console.log(error),
          }),
        ),
      ),
    ),
  );
  readonly getPositions = this.effect<void>(trigger$ =>
    trigger$.pipe(
      switchMap(() =>
        this.employeeMngmentService.getPositions().pipe(
          tapResponse({
            next: res => this.setPositions(res.positions),
            error: error => console.log(error),
          }),
        ),
      ),
    ),
  );

  readonly getCompetencyTimeline = this.effect(
    (params$: Observable<number>) =>
      params$.pipe(
        switchMap(params =>
          this.hrDashboardService.getCompetencyTimeline(params).pipe(
            tapResponse({
              next: res =>
                this.setCompetencyTimeline(res.competencyTimeLine),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );
}
