import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { GET_ROLES, GET_USERS } from '../constants/system-admin.constant';
import {
  IAccountApiResponse,
  IAccountParams,
  IEmployeeAccount,
  IRoleApiResponse,
} from '../models/system-admin.model';

@Injectable({
  providedIn: 'root',
})
export class SystemAdminService {
  constructor(private apollo: Apollo) {}
  getEmployeeAccounts(params: IAccountParams): Observable<IAccountApiResponse> {
    return this.apollo
      .watchQuery<IAccountApiResponse>({
        query: GET_USERS,
        variables: params,
      })
      .valueChanges.pipe(map(res => res.data));
  }

  getRoles(): Observable<IRoleApiResponse> {
    return this.apollo
      .watchQuery<IRoleApiResponse>({
        query: GET_ROLES,
      })
      .valueChanges.pipe(map(res => res.data));
  }
}
