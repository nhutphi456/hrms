import { Injectable } from '@angular/core';
import {
  IEmployee,
  IEmployeeParams,
} from '../models/employee-management.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { EmployeeManagementService } from '../services/employee-management.service';

export interface IEmployeeMngmentState {
  employees: IEmployee[];
  loading: boolean;
  employeeDetail: IEmployee | null;
}

@Injectable()
export class EmployeeStore extends ComponentStore<IEmployeeMngmentState> {
  constructor(private employeeMngmentService: EmployeeManagementService) {
    super({
      employees: [],
      loading: false,
      employeeDetail: null,
    });
  }

  //SELECTOR
  readonly employees$: Observable<IEmployee[]> = this.select(
    state => state.employees,
  );

  readonly employeeDetail$: Observable<IEmployee | null> = this.select(
    state => state.employeeDetail,
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
  readonly setEmployee = this.updater(
    (state: IEmployeeMngmentState, employee: IEmployee) => {
      return { ...state, employee };
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

  readonly getEmployee = this.effect((id$: Observable<string>) =>
    id$.pipe(
      switchMap(id =>
        this.employeeMngmentService.getEmployee(id).pipe(
          tapResponse({
            next: res => this.setEmployee(res.employee),
            error: error => console.log(error),
          }),
        ),
      ),
    ),
  );
}
