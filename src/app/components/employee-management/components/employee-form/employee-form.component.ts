import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileUpload } from 'primeng/fileupload';
import { NotificationService } from 'src/app/shared/message/notification.service';
import { EmployeeManagementService } from '../../services/employee-management.service';
import { HelperService } from 'src/app/services/helper.service';
import {
  departments,
  positions,
} from '../../constants/employee-management.constant';

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
      value: 0,
    },
    {
      label: 'Part-time',
      value: 1,
    },
    { label: 'Internship', value: 2 },
  ];

  departmentOptions = departments;

  positionOptions = positions;
  tempImg = '';

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private notificationService: NotificationService,
    private employeeService: EmployeeManagementService,
    private helperService: HelperService,
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
      dateOfBirth: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      address: ['', Validators.required],
      currentContract: [0, Validators.required],
      gender: 'Male',
      department: '',
      twitterLink: '',
      facebookLink: '',
      linkedinLink: '',
      instagramLink: '',
      position: ['', Validators.required],
      avatarImg: '',
      profileBio: '',
    });
  }

  onUpload(f: File): void {
    this.fileUpload.clear();
    this.fileUpload.choose();
    const reader = new FileReader();

    reader.onload = () => {
      const fileContent = reader.result as string; // Get the file content as base64 string

      this.tempImg = fileContent;
      console.log({ temp: this.tempImg });

      this.notificationService.successNotification(
        $localize`Uploaded new photo`,
      );

      this.addEmployeeForm.patchValue({
        avatarImg: this.tempImg,
      });

      // this.parseToByteArray(fileContent);
    };

    reader.readAsDataURL(f); // Read the file as base64 data
  }

  private parseToByteArray(base64: string) {
    const avaBytesArr = this.helperService.base64ToBytes(base64); // Convert base64 string to bytes
    const byteArr = Array.from(avaBytesArr);
    console.log('parse');
    this.addEmployeeForm.patchValue({
      avatarImg: byteArr,
    });
  }

  onSubmit() {
    const { department, position, dateOfBirth } = this.addEmployeeForm.value;
    const employee = {
      ...this.addEmployeeForm.value,
      departmentId: department.value,
      positionLevelId: position.value,
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      // avatarImg: '',
    };

    delete employee.department;
    delete employee.position;

    console.log({ employee: this.addEmployeeForm });

    this.employeeService.addEmployee(employee).subscribe();
    // this.ref.close()
  }
}
