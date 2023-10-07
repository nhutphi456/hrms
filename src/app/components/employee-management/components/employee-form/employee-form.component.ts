import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileUpload } from 'primeng/fileupload';
import { NotificationService } from 'src/app/shared/message/notification.service';
import { EmployeeManagementService } from '../../services/employee-management.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  @Input() visible!: boolean;
  @ViewChild('fileUpload') fileUpload!: FileUpload;
  addEmployeeForm!: FormGroup;
  employeeTypes = [
    {
      label: 'Full-time',
      value: 'Full-time',
    },
    {
      label: 'Part-time',
      value: 'Part-time',
    },
    { label: 'Internship', value: 'Internship' },
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

  positionOptions = [
    {
      label: 'Frontend Developer',
      value: 'frontend',
    },
    {
      label: 'Backend Developer',
      value: 'backend',
    },
    {
      label: 'UI/UX Designer',
      value: 'uiuxdesigner',
    },
  ];
  tempImg = '';

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private notificationService: NotificationService,
    private employeeService: EmployeeManagementService,
  ) {}

  get currentContract() {
    return this.addEmployeeForm.get('currentContract')?.value;
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
      currentContract: ['Full-time', Validators.required],
      gender: 0,
      department: 'se',
      socialAccounts: this.fb.group({
        twitter: '',
        facebook: '',
        linkedin: '',
        github: '',
      }),

      position: '',
    });
  }

  onUpload(f: File): void {
    this.fileUpload.clear();
    this.fileUpload.choose();
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result as string; // Get the file content as base64 string

      this.tempImg = fileContent;

      this.notificationService.successNotification(
        $localize`Uploaded new photo`,
      );

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
    const { department, position, gender } = this.addEmployeeForm.value;
    const employee = {
      ...this.addEmployeeForm.value,
      department: department.value,
      position: position.value,
      gender: '0',
      avatarImg: '',
    };
    delete employee.socialAccounts 
    console.log({ employee });

    this.employeeService.addEmployee(employee).subscribe();
    // this.ref.close()
  }
}
