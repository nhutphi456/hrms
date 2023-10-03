import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployeeAccount } from '../models/system-admin.model';
import { HrmsTable } from '../../share/models/hrms-table.model';
import { userAccount } from '../constants/system-admin.constant';
import { EmployeeAccountStore } from '../store/userAccount.store.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  employeesAccount$!: Observable<IEmployeeAccount[]>;
  tableData: HrmsTable<IEmployeeAccount> = {
    page: 0,
    first: 0,
    rows: 0,
    pageCount: 0,
    totalRecord: 0,
    data: {
      header: userAccount,
      body: [],
    },
  };
  constructor(private employeeStore: EmployeeAccountStore) {}

  ngOnInit(): void {
    this.employeeStore.getEmployeesAccount();
    this.employeesAccount$ = this.employeeStore.employeesAccount$;
    this.employeesAccount$.subscribe(employeesAccount => {
      const data = {
        page: 1,
        first: 1,
        rows: 3,
        pageCount: 1,
        totalRecord: 3,
        data: {
          header: [...this.tableData.data.header],
          body: employeesAccount,
        },
      };
      this.tableData = data;
    });
  }


  onPageChange() {
    return '';
  }

}
