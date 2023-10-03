import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

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

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
  ) {}

  get employeeType() {
    return this.addEmployeeForm.get('type')?.value;
  }

  get formControls() {
    return this.addEmployeeForm.controls;
  }
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.addEmployeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      type: [0, Validators.required],
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

  onSubmit() {
    console.log({ values: this.addEmployeeForm });
    console.log((this.formControls['firstName'] as any).hasError('required'))
    // this.ref.close()
  }
}
