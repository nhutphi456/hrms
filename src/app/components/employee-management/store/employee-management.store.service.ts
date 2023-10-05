import { Injectable } from '@angular/core';
import {
  IEmployee,
  IEmployeeParams,
} from '../models/employee-management.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, exhaustMap, switchMap } from 'rxjs';
import { EmployeeManagementService } from '../services/employee-management.service';

export interface IEmployeeMngmentState {
  employees: IEmployee[];
  loading: boolean;
}

@Injectable()
export class EmployeeStore extends ComponentStore<IEmployeeMngmentState> {
  constructor(private employeeMngmentService: EmployeeManagementService) {
    super({
      employees: [],
      loading: false,
    });
  }

  //SELECTOR
  readonly employees$: Observable<IEmployee[]> = this.select(
    state => state.employees,
  );
  //UPDATER
  readonly setLoading = this.updater(
    (state: IEmployeeMngmentState, loading: boolean) => {
      return {
        ...state,
        loading,
      };
    },
  );
  readonly setEmployees = this.updater(
    (state: IEmployeeMngmentState, employees: IEmployee[]) => {
      return {
        ...state,
        employees,
      };
    },
  );
  //EFFECTS
  readonly getEmployees = this.effect((params$: Observable<IEmployeeParams>) =>
    params$.pipe(
      switchMap(params =>
        this.employeeMngmentService.getEmployees(params).pipe(
          tapResponse({
            next: res => this.setEmployees(res.employees),
            error: error => console.log(error),
          }),
        ),
      ),
    ),
  );
}
