import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-system-admin',
  templateUrl: './system-admin.component.html',
  styleUrls: ['./system-admin.component.scss']
})
export class SystemAdminComponent  {
  title = "User Management";
  listAccount = "  List accounts ";
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
