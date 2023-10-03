import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  @Input() visible!: boolean;
  @Output() handleClose = new EventEmitter();
  addEmployeeForm!: FormGroup;
  employeeTypes = [
    {
      label: 'Full-time',
      value: 0,
    },
    {
      label: 'Part-time',
      value: 1,
    },
    { label: 'Internship', value: 2 },
  ];

  departmentOptions = [
    {
      label: 'Software Development',
      value: 'se',
    },
    {
      label: 'Business Analysis',
      value: 'ba',
    },
    {
      label: 'Quality Assurance',
      value: 'qa',
    },
  ];
  tempImg = '';
  constructor(private fb: FormBuilder) {}
  get employeeType() { return this.addEmployeeForm.get('type')?.value; }
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.addEmployeeForm = this.fb.group({
      firstName: '',
      lastName: '',
      dob: '',
      email: '',
      phone: '',
      address: '',
      type: 0,
      gender: 'MALE',
      department: 'se',
    });
  }
  onHideModal() {
    this.handleClose.emit();
  }

  onUpload(f: File): void {
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result as string; // Get the file content as base64 string

      this.tempImg = fileContent;

      // this.notificationService.successNotification(
      //   $localize`Uploaded new photo`
      // );

      this.parseToByteArray(fileContent);
    };

    reader.readAsDataURL(f); // Read the file as base64 data
  }

  private parseToByteArray(base64: string) {
    // const avaBytesArr = this.helperService.base64ToBytes(base64); // Convert base64 string to bytes
    // const byteArr = Array.from(avaBytesArr);
    // this.editForm.patchValue({
    //   avatar: byteArr,
    // });
  }
}
