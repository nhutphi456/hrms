import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import {
  ADD_EMPLOYEE,
  GET_DEPARTMENTS,
  GET_EMPLOYEE,
  GET_EMPLOYEES,
  GET_NEW_EMPLOYEES,
  GET_POSITIONS,
  UPDATE_EMPLOYEE,
} from '../constants/employee-management.constant';
import {
  IAddEmployeeApiResponse,
  IDepartmentApiResponse,
  IEmployeeApiResponse,
  IEmployeeDetailApiResponse,
  IEmployeeInput,
  IEmployeeParams,
  INewEmployeeApiResponse,
  IPositionApiResponse
} from '../models/employee-management.model';
@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService {
  constructor(private apollo: Apollo) {}

  getEmployees(params: IEmployeeParams): Observable<IEmployeeApiResponse> {
    // return from([mockData]);
    return this.apollo
      .watchQuery<IEmployeeApiResponse>({
        query: GET_EMPLOYEES,
        variables: params,
      })
      .valueChanges.pipe(map(res => res.data));
  }

  getEmployee(id: number): Observable<IEmployeeDetailApiResponse> {
    return this.apollo
      .watchQuery<IEmployeeDetailApiResponse>({
        query: GET_EMPLOYEE,
        variables: { id },
      })
      .valueChanges.pipe(map(res => res.data));
  }

  updateEmployee(employee: any) {
    return this.apollo.mutate({
      mutation: UPDATE_EMPLOYEE,
      variables: { input: employee },
    });
  }

  addEmployee(
    employee: IEmployeeInput,
  ): Observable<MutationResult<IAddEmployeeApiResponse>> {
    return this.apollo.mutate<IAddEmployeeApiResponse>({
      mutation: ADD_EMPLOYEE,
      variables: { ...employee },
    });
  }

  getDepartments(): Observable<IDepartmentApiResponse> {
    return this.apollo
      .watchQuery<IDepartmentApiResponse>({
        query: GET_DEPARTMENTS,
      })
      .valueChanges.pipe(map(res => res.data));
  }

  getNewEmployees(): Observable<INewEmployeeApiResponse> {
    return this.apollo
      .watchQuery<INewEmployeeApiResponse>({
        query: GET_NEW_EMPLOYEES,
      })
      .valueChanges.pipe(map(res => res.data));
  }

  getPositions(): Observable<IPositionApiResponse> {
    return this.apollo
      .watchQuery<IPositionApiResponse>({
        query: GET_POSITIONS,
      })
      .valueChanges.pipe(map(res => res.data));
  }
}
