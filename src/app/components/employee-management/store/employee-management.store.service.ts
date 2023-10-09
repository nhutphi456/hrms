import { Injectable } from '@angular/core';
import {
  Department,
  IEmployee,
  IEmployeeParams,
  IPosition,
} from '../models/employee-management.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { EmployeeManagementService } from '../services/employee-management.service';
import { PaginatedData } from 'src/app/models/global.model';

export interface IEmployeeMngmentState {
  employees: PaginatedData<IEmployee>;
  loading: boolean;
  employeeDetail: IEmployee | null;
  departments: Department[];
  newEmployees: IEmployee[];
  positions: IPosition[];
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeStore extends ComponentStore<IEmployeeMngmentState> {
  constructor(private employeeMngmentService: EmployeeManagementService) {
    super({
      employees: {
        pagination: {
          pageNo: 0,
          pageSize: 0,
          totalItems: 0,
          totalPages: 0,
        },
        data: [],
      },
      loading: false,
      employeeDetail: null,
      departments: [],
      newEmployees: [],
      positions: [],
    });
  }

  //SELECTOR
  readonly employees$: Observable<PaginatedData<IEmployee>> = this.select(
    state => state.employees,
  );

  readonly employeeDetail$: Observable<IEmployee | null> = this.select(
    state => state.employeeDetail,
  );

  readonly departments$: Observable<Department[]> = this.select(
    state => state.departments,
  );

  readonly newEmployee$: Observable<IEmployee[]> = this.select(
    state => state.newEmployees,
  );

  readonly positions$: Observable<IPosition[]> = this.select(
    state => state.positions,
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
    (state: IEmployeeMngmentState, employees: PaginatedData<IEmployee>) => {
      return {
        ...state,
        employees,
      };
    },
  );
  readonly setEmployee = this.updater(
    (state: IEmployeeMngmentState, employee: IEmployee) => {
      return { ...state, employeeDetail: employee };
    },
  );
  readonly setDepartments = this.updater(
    (state: IEmployeeMngmentState, departments: Department[]) => {
      return { ...state, departments };
    },
  );
  readonly setNewEmployees = this.updater(
    (state: IEmployeeMngmentState, newEmployees: IEmployee[]) => {
      return { ...state, newEmployees };
    },
  );
  readonly setPositions = this.updater(
    (state: IEmployeeMngmentState, positions: IPosition[]) => {
      return { ...state, positions };
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

  readonly getEmployee = this.effect((id$: Observable<number>) =>
    id$.pipe(
      switchMap(id =>
        this.employeeMngmentService.getEmployee(id).pipe(
          tapResponse({
            next: res => {
              if (res.employee !== null) {
                this.setEmployee(res.employee);
              }
            },
            error: error => console.log(error),
          }),
        ),
      ),
    ),
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

  readonly getNewEmployees = this.effect<void>(trigger$ =>
    trigger$.pipe(
      switchMap(() =>
        this.employeeMngmentService.getNewEmployees().pipe(
          tapResponse({
            next: res => this.setNewEmployees(res.employeeOfTheMonth),
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
