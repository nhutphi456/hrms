import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import {
  IAccountParams,
  IAccountRole,
  IEmployeeAccount,
} from '../models/system-admin.model';
import { SystemAdminService } from '../services/system-admin.service';
import { PaginatedData } from 'src/app/models/global.model';

export interface IUserAccountState {
  employeeAccounts: PaginatedData<IEmployeeAccount>;
  loading: boolean;
  roles: IAccountRole[];
}

@Injectable()
export class EmployeeAccountStore extends ComponentStore<IUserAccountState> {
  constructor(private employeeMngmentService: SystemAdminService) {
    super({
      employeeAccounts: {
        pagination: {
          pageNo: 0,
          pageSize: 0,
          totalItems: 0,
          totalPages: 0,
        },
        data: [],
      },
      loading: false,
      roles: [],
    });
  }

  //SELECTOR
  readonly employeeAccounts$: Observable<PaginatedData<IEmployeeAccount>> =
    this.select(state => state.employeeAccounts);
  readonly roles$: Observable<IAccountRole[]> = this.select(
    state => state.roles,
  );
  //UPDATER
  readonly setLoading = this.updater(
    (state: IUserAccountState, loading: boolean) => {
      return {
        ...state,
        loading,
      };
    },
  );
  readonly setEmployeeAccounts = this.updater(
    (
      state: IUserAccountState,
      employeeAccounts: PaginatedData<IEmployeeAccount>,
    ) => {
      return {
        ...state,
        employeeAccounts,
      };
    },
  );
  readonly setRoles = this.updater(
    (state: IUserAccountState, roles: IAccountRole[]) => {
      return {
        ...state,
        roles,
      };
    },
  );
  //EFFECTS
  readonly getEmployeeAccounts = this.effect(
    (params$: Observable<IAccountParams>) =>
      params$.pipe(
        switchMap(params =>
          this.employeeMngmentService.getEmployeeAccounts(params).pipe(
            tapResponse({
              next: res => this.setEmployeeAccounts(res.users),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );

  readonly getRoles = this.effect<void>(trigger$ =>
    trigger$.pipe(
      switchMap(() =>
        this.employeeMngmentService.getRoles().pipe(
          tapResponse({
            next: res => this.setRoles(res.roles),
            error: error => console.log(error),
          }),
        ),
      ),
    ),
  );
}
