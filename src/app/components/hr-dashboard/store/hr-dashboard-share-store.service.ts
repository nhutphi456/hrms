import { Injectable } from '@angular/core';
import {
  Department,
  IPosition,
} from '../../employee-management/models/employee-management.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { EmployeeManagementService } from '../../employee-management/services/employee-management.service';

export interface IHRDashboardShareState {
  departments: Department[];
  positions: IPosition[];
}

@Injectable({
  providedIn: 'root',
})
export class HrDashboardShareStoreService extends ComponentStore<IHRDashboardShareState> {
  constructor(private employeeMngmentService: EmployeeManagementService) {
    super({
      departments: [],
      positions: [],
    });
  }

  readonly departments$: Observable<Department[]> = this.select(
    state => state.departments,
  );

  readonly positions$: Observable<IPosition[]> = this.select(
    state => state.positions,
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
}
