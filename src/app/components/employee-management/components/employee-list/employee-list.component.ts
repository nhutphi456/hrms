import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';

import {
  employeeLabelItems,
  employeeTableCols,
} from '../../constants/employee-management.constant';
import { IEmployee } from '../../models/employee-management.model';
import { EmployeeStore } from '../../store/employee-management.store.service';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeListComponent implements OnInit {
  labelItems: MenuItem[] = employeeLabelItems;
  activeItem: MenuItem = this.labelItems[0];
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
  filterForm!: FormGroup;
  departmentOptions: { label: string; value: unknown }[] = [
    {
      label: 'Software Development',
      value: 'SD',
    },
    {
      label: 'Design',
      value: 'DS',
    },
  ];

  contractOptions: { label: string; value: unknown }[] = [
    {
      label: 'Fulltime',
      value: 'fulltime',
    },
    {
      label: 'Part-time',
      value: 'parttime',
    },
    {
      label: 'Internship',
      value: 'internship',
    },
  ];
  selectedDepartments!: any[];
  isModalVisible = false;

  constructor(
    private employeeStore: EmployeeStore,
    private fb: FormBuilder,
  ) {
    this.filterForm = this.fb.group({
      departments: '',
      contracts: '',
    });
  }

  ngOnInit(): void {
    this.employeeStore.getEmployees();
    this.employees$ = this.employeeStore.employees$;
    this.employees$.subscribe(employees => {
      const data = {
        page: 1,
        first: 1,
        rows: 3,
        pageCount: 1,
        totalRecord: 3,
        data: {
          header: [...this.tableData.data.header],
          body: employees,
        },
      };
      this.tableData = data;
    });
  }

  onPageChange() {
    return '';
  }

  onActiveItemChange(e: Event) {
    return null;
  }
  onSelectDepartment(e: any) {
    console.log({ e2: e });
  }

  onSubmit(val: any) {
    console.log({ val });
  }
  openAddEmployeeModal() {
    this.isModalVisible = true;
  }
  closeAddEmployeeModal() {
    this.isModalVisible = false;
  }
}
