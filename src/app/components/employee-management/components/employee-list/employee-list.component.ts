import { Component, OnInit } from '@angular/core';
import { EmployeeStore } from '../../store/employee-management.store.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/employee-management.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees$!: Observable<IEmployee[]>;

  constructor(private employeeStore: EmployeeStore) {}

  ngOnInit(): void {
    this.employeeStore.getEmployees();
    this.employees$ = this.employeeStore.employees$;
    this.employees$.subscribe(employees => {
      console.log({employees})
    })
  }
}
