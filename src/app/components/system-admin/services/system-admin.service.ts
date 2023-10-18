import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import {
  GET_ROLES,
  GET_USER,
  GET_USERS,
  UPDATE_USER,
  UPDATE_USERS,
} from '../constants/system-admin.constant';
import {
  IAccountApiResponse,
  IAccountParams,
  IGetUserApiResponse,
  IRoleApiResponse,
  IUpdateAccountInfoParams,
  IUpdateAccountParams
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

  updateUsers(params: IUpdateAccountParams) {
    return this.apollo.mutate({
      mutation: UPDATE_USERS,
      variables: { ...params },
    });
  }

  getUser(id: number): Observable<IGetUserApiResponse> {
    return this.apollo
      .watchQuery<IGetUserApiResponse>({
        query: GET_USER,
        variables: { id },
      })
      .valueChanges.pipe(map(res => res.data));
  }

  updateUsernamePassword(params: IUpdateAccountInfoParams) {
    return this.apollo.mutate({
      mutation: UPDATE_USER,
      variables: { ...params },
    });
  }
}
