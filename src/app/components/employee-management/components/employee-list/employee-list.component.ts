import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { employeeTableCols } from '../../constants/employee-management.constant';
import { IEmployee } from '../../models/employee-management.model';
import { EmployeeStore } from '../../store/employee-management.store.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees$!: Observable<IEmployee[]>;
  tableData: HrmsTable<IEmployee> = {
    page: 0,
    first: 0,
    rows: 0,
    pageCount: 0,
    totalRecord: 0,
    data: {
      header: employeeTableCols,
      body: [],
    },
  };
  constructor(private employeeStore: EmployeeStore) {}

  ngOnInit(): void {
    this.employeeStore.getEmployees();
    this.employees$ = this.employeeStore.employees$;
    this.employees$.subscribe(employees => {
      this.tableData.data.body = employees
    });
  }

  onPageChange(e: PageChangeEvent): void {}
}
