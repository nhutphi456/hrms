import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-system-header',
  templateUrl: './system-header.component.html',
  styleUrls: ['./system-header.component.scss']
})
export class SystemHeaderComponent {
  filterForm!: FormGroup;

  statusOptions: { label: string; value: unknown }[] = [
    {
      label: 'Active',
      value: 'active',
    },
    {
      label: 'Inactive',
      value: 'inactive',
    },
  ];

  roleOptions: { label: string; value: unknown }[] = [
    {
      label: 'Admin',
      value: 'Amdin',
    },
    {
      label: 'Users',
      value: 'Users',
    },
    {
      label: 'Manager',
      value: 'Manager',
    },
  ];
  selectedDepartments!: any[];

  constructor(
    private fb: FormBuilder,
  ) {
    this.filterForm = this.fb.group({
      departments: '',
      contracts: '',
    });
  }


  onActiveItemChange(e: Event) {
    return null;
  }
  onSelectDepartment(e: any) {
    console.log({ e2: e });
    console.log({ selectedd: this.selectedDepartments });
  }

  onSubmit(val: any) {
    console.log({ val });
  }
}
