import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { IEmployee } from '../models/employee-management.model';

const mockData: IEmployee[] = [
  {
    firstName: 'Erling',
    lastName: 'Haaland',
    gender: 1,
    dob: '01/01/1999',
    position: 'Frontend Developer',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 0,
    reportTo: 1,
    department: 'Software Development',
    currentContract: 'Full-time',
  },
  {
    firstName: 'Bernado',
    lastName: 'Silva',
    gender: 1,
    dob: '01/01/1999',
    position: 'Backend Developer',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
    department: 'Software Development',
    currentContract: 'Full-time',
  },
  {
    firstName: 'Lionel',
    lastName: 'Messi',
    gender: 1,
    dob: '01/01/1999',
    position: 'Tester',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
    department: 'Software Development',
    currentContract: 'Full-time',
  },
  {
    firstName: 'Erling',
    lastName: 'Haaland',
    gender: 1,
    dob: '01/01/1999',
    position: 'Frontend Developer',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
    department: 'Software Development',
    currentContract: 'Full-time',
  },
  {
    firstName: 'Bernado',
    lastName: 'Silva',
    gender: 1,
    dob: '01/01/1999',
    position: 'Backend Developer',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
    department: 'Software Development',
    currentContract: 'Full-time',
  },
  {
    firstName: 'Lionel',
    lastName: 'Messi',
    gender: 1,
    dob: '01/01/1999',
    position: 'Tester',
    phone: '0123456789',
    email: 'test@gmail.com',
    address: 'manchester',
    status: 1,
    reportTo: 1,
    department: 'Software Development',
    currentContract: 'Full-time',
  },
];
@Injectable({
  providedIn: 'root',
})
export class EmployeeManagementService {
  getEmployees(): Observable<IEmployee[]> {
    return from([mockData]);
  }

  getEmployee(id: string) {
    return id;
  }

  updateEmployee(employee: IEmployee) {
    return employee;
  }

  addEmployee(employee: IEmployee) {
    return employee;
  }
}
