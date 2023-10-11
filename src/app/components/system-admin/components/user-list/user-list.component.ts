import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccountParams, IEmployeeAccount } from '../../models/system-admin.model';
import { HrmsTable } from '../../../share/models/hrms-table.model';
import {
  userAccount,
  userLabelItems,
} from '../../constants/system-admin.constant';
import { EmployeeAccountStore } from '../../store/userAccount.store.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { PageChangeEvent } from '../../../share/models/pagingInfo.model';
import { PaginatedData } from 'src/app/models/global.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  labelItems: MenuItem[] = userLabelItems;
  activeItem: MenuItem = this.labelItems[0];
  employeeAccounts$: Observable<PaginatedData<IEmployeeAccount>> =
    this.accountStore.employeeAccounts$;
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
  filterForm!: FormGroup;

  roleOptions!: { label: string; value: number }[];
  accountParams: IAccountParams = { pageNo: 1 };
  gapPageNumber = 1;

  constructor(
    private fb: FormBuilder,
    private accountStore: EmployeeAccountStore,
  ) {
    this.filterForm = this.fb.group({
      roles: '',
    });
  }
  get roles() {
    return this.filterForm.get('roles')?.value;
  }
  ngOnInit(): void {
    this.accountStore.getEmployeeAccounts(this.accountParams);
    this.accountStore.getRoles();

    this.employeeAccounts$.subscribe(result => {
      const { pageNo, pageSize, totalItems, totalPages } = result.pagination;

      const data = {
        page: pageNo,
        first: pageSize * (pageNo - 1),
        rows: pageSize,
        pageCount: totalPages,
        totalRecord: totalItems,
        data: {
          header: [...this.tableData.data.header],
          body: result.data,
        },
      };
      this.tableData = data;
    });

    this.accountStore.roles$.subscribe(roles => {
      this.roleOptions = roles.map(r => {
        return {
          label: r.name,
          value: r.roleId,
        };
      });
    });
  }

  onSubmit(val: any) {
    console.log({ val });
  }
  handleClearAll() {
    this.filterForm.setValue({
      roles: [],
    });
    this.onFilter();
  }

  isClearAllVisible() {
    return this.roles.length;
  }
  searchValue(search: string): void {
    this.handleAccountParams('search', search);
    this.getAccounts();
  }
  onPageChange(e: PageChangeEvent): void {
    this.handleAccountParams('pageNo', e.page + this.gapPageNumber);
    this.getAccounts();
  }
  onActiveItemChange(label: MenuItem): void {
    this.activeItem = label;
    if (this.activeItem.id) {
      this.handleAccountParams(
        'status',
        this.activeItem.id === '1' ? true : false,
      );
    } else {
      delete this.accountParams.status;
    }

    this.getAccounts();
  }
  getAccounts() {
    this.accountStore.getEmployeeAccounts(this.accountParams);
    console.log({ accountParams: this.accountParams });
  }
  handleAccountParams(
    key: string,
    value: string | number | Date | string[] | boolean,
  ): void {
    this.accountParams = {
      ...this.accountParams,
      [key]: value,
    };
  }
  onFilter() {
    const formValues = this.filterForm.value;

    for (const key in formValues) {
      const value = formValues[key];
      if (value) {
        this.handleAccountParams(key, value);
      }
    }

    this.getAccounts();
  }
}
