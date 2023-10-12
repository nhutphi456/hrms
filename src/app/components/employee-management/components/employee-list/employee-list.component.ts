import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';

import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { PaginatedData } from 'src/app/models/global.model';
import {
  currentContracts,
  employeeLabelItems,
  employeeTableCols,
} from '../../constants/employee-management.constant';
import {
  Department,
  IEmployee,
  IEmployeeParams,
} from '../../models/employee-management.model';
import { EmployeeStore } from '../../store/employee-management.store.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeListComponent implements OnInit {
  labelItems: MenuItem[] = employeeLabelItems;
  activeItem: MenuItem = this.labelItems[0];
  employees$: Observable<PaginatedData<IEmployee>> =
    this.employeeStore.employees$;
  department$: Observable<Department[]> = this.employeeStore.departments$;
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
  filterForm!: FormGroup;
  departmentOptions!: { label: string; value: number }[];
  contractOptions = currentContracts;
  ref!: DynamicDialogRef;
  employeeParams: IEmployeeParams = { pageNo: 1 };
  gapPageNumber = 1;

  constructor(
    private employeeStore: EmployeeStore,
    private fb: FormBuilder,
    public dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.employeeStore.getDepartments();
    this.employees$.subscribe(result => {
      const { pageNo, pageSize, totalItems, totalPages } = result.pagination;
      const tData = {
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
      this.tableData = tData;
    });
    this.department$.subscribe(departments => {
      this.departmentOptions = departments.map(dep => {
        return {
          label: dep.departmentName,
          value: dep.id,
        };
      });
    });

    this.initFilterForm();
  }

  get departmentIds() {
    return this.filterForm.get('departmentIds')?.value;
  }
  get currentContracts() {
    return this.filterForm.get('currentContracts')?.value;
  }

  getEmployees() {
    this.employeeStore.getEmployees(this.employeeParams);
    console.log({ params: this.employeeParams });
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      departmentIds: '',
      currentContracts: '',
    });
  }
  searchValue(search: string): void {
    this.handleEmployeeParams('name', search);
    this.getEmployees();
  }
  onPageChange(e: PageChangeEvent): void {
    this.handleEmployeeParams('pageNo', e.page + this.gapPageNumber);
    this.getEmployees();
  }

  onActiveItemChange(label: MenuItem): void {
    this.activeItem = label;
    if (this.activeItem.id) {
      this.handleEmployeeParams(
        'status',
        this.activeItem.id === '1' ? true : false,
      );
    } else {
      delete this.employeeParams.status;
    }

    this.getEmployees();
  }

  onFilter() {
    const formValues = this.filterForm.value;

    for (const key in formValues) {
      const value = formValues[key];
      if (value) {
        this.handleEmployeeParams(key, value);
      }
    }

    this.getEmployees();
  }

  handleEmployeeParams(
    key: string,
    value: string | number | Date | string[] | boolean,
  ): void {
    this.employeeParams = {
      ...this.employeeParams,
      [key]: value,
    };
  }
  openAddEmployeeModal() {
    this.ref = this.dialogService.open(EmployeeFormComponent, {
      header: 'Create profile',
      contentStyle: { overflow: 'auto' },
      width: '60vw',
    });
  }

  handleClearAll() {
    this.filterForm.setValue({
      departmentIds: [],
      currentContracts: [],
    });
    this.onFilter();
  }

  isClearAllVisible() {
    return this.departmentIds.length || this.currentContracts.length;
  }
}
