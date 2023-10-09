import { Injectable } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import {
  IEmployee,
  IEmployeeApiResponse,
  IEmployeeDetailApiResponse,
  IEmployeeParams,
} from '../models/employee-management.model';
import { Apollo } from 'apollo-angular';
import {
  ADD_EMPLOYEE,
  GET_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
} from '../constants/employee-management.constant';

// const mockData: IEmployee[] = [
//   {
//     firstName: 'Erling',
//     lastName: 'Haaland',
//     gender: 1,
//     dob: '01/01/1999',
//     position: 'Frontend Developer',
//     phone: '0123456789',
//     email: 'test@gmail.com',
//     address: 'manchester',
//     status: 0,
//     reportTo: 1,
//     department: 'Software Development',
//     currentContract: 'Full-time',
//   },
//   {
//     firstName: 'Bernado',
//     lastName: 'Silva',
//     gender: 1,
//     dob: '01/01/1999',
//     position: 'Backend Developer',
//     phone: '0123456789',
//     email: 'test@gmail.com',
//     address: 'manchester',
//     status: 1,
//     reportTo: 1,
//     department: 'Software Development',
//     currentContract: 'Full-time',
//   },
//   {
//     firstName: 'Lionel',
//     lastName: 'Messi',
//     gender: 1,
//     dob: '01/01/1999',
//     position: 'Tester',
//     phone: '0123456789',
//     email: 'test@gmail.com',
//     address: 'manchester',
//     status: 1,
//     reportTo: 1,
//     department: 'Software Development',
//     currentContract: 'Full-time',
//   },
//   {
//     firstName: 'Erling',
//     lastName: 'Haaland',
//     gender: 1,
//     dob: '01/01/1999',
//     position: 'Frontend Developer',
//     phone: '0123456789',
//     email: 'test@gmail.com',
//     address: 'manchester',
//     status: 1,
//     reportTo: 1,
//     department: 'Software Development',
//     currentContract: 'Full-time',
//   },
//   {
//     firstName: 'Bernado',
//     lastName: 'Silva',
//     gender: 1,
//     dob: '01/01/1999',
//     position: 'Backend Developer',
//     phone: '0123456789',
//     email: 'test@gmail.com',
//     address: 'manchester',
//     status: 1,
//     reportTo: 1,
//     department: 'Software Development',
//     currentContract: 'Full-time',
//   },
//   {
//     firstName: 'Lionel',
//     lastName: 'Messi',
//     gender: 1,
//     dob: '01/01/1999',
//     position: 'Tester',
//     phone: '0123456789',
//     email: 'test@gmail.com',
//     address: 'manchester',
//     status: 1,
//     reportTo: 1,
//     department: 'Software Development',
//     currentContract: 'Full-time',
//   },
// ];
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

  addEmployee(employee: any) {
    return this.apollo.mutate({
      mutation: ADD_EMPLOYEE,
      variables: { input: employee },
    });
  }

  getDepartments() {
    return ''
  }

  getCurrentContracts() {
    return ''
  }
}
