import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeTableCols } from '../../constants/employee-management.constant';
import { IEmployee } from '../../models/employee-management.model';
import { EmployeeStore } from '../../store/employee-management.store.service';
import { TableHeader } from 'src/app/models/global.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees$!: Observable<IEmployee[]>;
  columns: TableHeader[] = employeeTableCols;
  constructor(private employeeStore: EmployeeStore) {}

  ngOnInit(): void {
    this.employeeStore.getEmployees();
    this.employees$ = this.employeeStore.employees$;
    this.employees$.subscribe(employees => {
      console.log({ employees });
    });
  }
}
