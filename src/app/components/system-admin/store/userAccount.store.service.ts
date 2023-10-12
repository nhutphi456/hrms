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
  selectedAccountIds: number[];
  headerChecked: boolean;
  user: IEmployeeAccount | null;
}

@Injectable()
export class EmployeeAccountStore extends ComponentStore<IUserAccountState> {
  constructor(private systemAdminService: SystemAdminService) {
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
      selectedAccountIds: [],
      headerChecked: false,
      user: null,
    });
  }

  //SELECTOR
  readonly employeeAccounts$: Observable<PaginatedData<IEmployeeAccount>> =
    this.select(state => state.employeeAccounts);
  readonly roles$: Observable<IAccountRole[]> = this.select(
    state => state.roles,
  );
  readonly selectedAccountIds$: Observable<number[]> = this.select(
    state => state.selectedAccountIds,
  );
  readonly headerChecked$: Observable<boolean> = this.select(
    state => state.headerChecked,
  );

  readonly user$: Observable<IEmployeeAccount | null> = this.select(
    state => state.user,
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
  readonly addAccount = this.updater(
    (state: IUserAccountState, accountId: number) => {
      state.selectedAccountIds = [
        ...new Set([...state.selectedAccountIds, accountId]),
      ];

      const { totalItems } = state.employeeAccounts.pagination;
      if (totalItems === state.selectedAccountIds.length) {
        this.setHeaderChecked(true);
      }

      return {
        ...state,
      };
    },
  );
  readonly removeAccount = this.updater(
    (state: IUserAccountState, accountId: number) => {
      const { totalItems } = state.employeeAccounts.pagination;

      state.selectedAccountIds = state.selectedAccountIds.filter(
        id => id !== accountId,
      );

      if (totalItems !== state.selectedAccountIds.length) {
        this.setHeaderChecked(false);
      }

      return {
        ...state,
      };
    },
  );
  readonly removeAllAccount = this.updater((state: IUserAccountState) => {
    state.selectedAccountIds = [];
    return {
      ...state,
    };
  });
  readonly setHeaderChecked = this.updater(
    (state: IUserAccountState, headerChecked: boolean) => {
      return {
        ...state,
        headerChecked,
      };
    },
  );
  readonly setUser = this.updater(
    (state: IUserAccountState, user: IEmployeeAccount) => {
      return {
        ...state,
        user,
      };
    },
  );
  //EFFECTS
  readonly getEmployeeAccounts = this.effect(
    (params$: Observable<IAccountParams>) =>
      params$.pipe(
        switchMap(params =>
          this.systemAdminService.getEmployeeAccounts(params).pipe(
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
        this.systemAdminService.getRoles().pipe(
          tapResponse({
            next: res => this.setRoles(res.roles),
            error: error => console.log(error),
          }),
        ),
      ),
    ),
  );

  readonly getUser = this.effect((id$: Observable<number>) =>
    id$.pipe(
      switchMap(id =>
        this.systemAdminService.getUser(id).pipe(
          tapResponse({
            next: res => this.setUser(res.user),
            error: error => console.log(error),
          }),
        ),
      ),
    ),
  );
}
