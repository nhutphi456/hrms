import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import {
  employeeLabelItems,
  employeeTableCols,
} from '../../constants/employee-management.constant';
import { IEmployee } from '../../models/employee-management.model';
import { EmployeeStore } from '../../store/employee-management.store.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { DataResponse } from 'src/app/models/global.model';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeListComponent implements OnInit {
  labelItems: MenuItem[] = employeeLabelItems;
  activeItem: MenuItem = this.labelItems[0];
  employees$: Observable<DataResponse<IEmployee>> =
    this.employeeStore.employees$;
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
  departmentOptions: { label: string; value: string }[] = [
    {
      label: 'Software Development',
      value: 'Software Development',
    },
    {
      label: 'Design',
      value: 'Design',
    },
  ];
  contractOptions: { label: string; value: string }[] = [
    {
      label: 'Full-time',
      value: 'Full-time',
    },
    {
      label: 'Part-time',
      value: 'Part-time',
    },
    {
      label: 'Internship',
      value: 'Internship',
    },
  ];
  ref!: DynamicDialogRef;
  employeeParams = {};
  gapPageNumber = 1;

  constructor(
    private employeeStore: EmployeeStore,
    private fb: FormBuilder,
    public dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.getEmployees();
    this.employees$.subscribe(result => {
      const tData = {
        page: result.page,
        first: 1,
        rows: result.per_page,
        pageCount: result.total_pages,
        totalRecord: result.total_items,
        data: {
          header: [...this.tableData.data.header],
          body: result.data,
        },
      };
      this.tableData = tData;
    });

    this.initFilterForm();
  }

  get deparments() {
    return this.filterForm.get('departments')?.value;
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
      departments: '',
      currentContracts: '',
    });
  }
  searchValue(search: string): void {
    this.handleEmployeeParams('keyword', search);
    this.getEmployees();
  }
  onPageChange(e: PageChangeEvent): void {
    this.handleEmployeeParams('page', e.page + this.gapPageNumber);
    this.getEmployees();
  }

  onActiveItemChange(label: MenuItem): void {
    this.activeItem = label;
    this.handleEmployeeParams('status', parseInt(this.activeItem.id ?? ''));
    this.getEmployees();
  }

  onFilter() {
    const formValues = this.filterForm.value;
    for (const key in formValues) {
      const value = formValues[key];
      if (value) {
        this.handleEmployeeParams(key, value.join(','));
      }
    }

    this.getEmployees();
  }

  handleEmployeeParams(
    key: string,
    value: string | number | Date | string[],
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
    this.filterForm.patchValue({
      departments: [],
      currentContracts: [],
    });
  }

  isClearAllVisible() {
    return this.deparments.length || this.currentContracts.length;
  }
}
