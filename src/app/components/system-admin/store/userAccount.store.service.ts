import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, exhaustMap } from 'rxjs';
import { IEmployeeAccount } from '../models/system-admin.model';
import { SystemAdminService } from '../services/system-admin.service';

export interface IUserAccountState {
  employeesAccount: IEmployeeAccount[];
  loading: boolean;
}

@Injectable()
export class EmployeeAccountStore extends ComponentStore<IUserAccountState> {
  constructor(private employeeMngmentService: SystemAdminService) {
    super({
      employeesAccount: [],
      loading: false,
    });
  }

  //SELECTOR
  readonly employeesAccount$: Observable<IEmployeeAccount[]> = this.select(
    state => state.employeesAccount,
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
  readonly setEmployeesAccount = this.updater(
    (state: IUserAccountState, employeesAccount: IEmployeeAccount[]) => {
      return {
        ...state,
        employeesAccount,
      };
    },
  );
  //EFFECTS
  readonly getEmployeesAccount = this.effect<void>(trigger$ =>
    trigger$.pipe(
      exhaustMap(() =>
        this.employeeMngmentService.getEmployees().pipe(
          tapResponse({
            next: employeesAccount => this.setEmployeesAccount(employeesAccount),
            error: error => console.log(error),
          }),
        ),
      ),
    ),
  );
}
