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
import { EmployeeStore } from '../../store/employee-management.store.service';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  providers: [EmployeeStore],
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

  departmentOptions!: { label: string; value: number }[];

  positionOptions!: { label: string; value: number }[];
  tempImg = '';

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private notificationService: NotificationService,
    private employeeService: EmployeeManagementService,
    private helperService: HelperService,
    private employeeStore: EmployeeStore,
  ) {}

  get currentContract() {
    return this.addEmployeeForm.get('currentContract')?.value;
  }

  get formControls() {
    return this.addEmployeeForm.controls;
  }
  ngOnInit(): void {
    this.initForm();
    this.employeeStore.departments$.subscribe(departments => {
      this.departmentOptions = departments.map(dep => {
        return {
          label: dep.departmentName,
          value: dep.id,
        };
      });
    });
    this.employeeStore.positions$.subscribe(positions => {
      this.positionOptions = positions.map(pos => {
        return {
          label: pos.positionName,
          value: pos.id,
        };
      });
    });
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
      position: '',
      // profilePicture: '',
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
      positionId: position.value,
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      dateJoined: new Date().toISOString()
      // avatarImg: '',
    };

    delete employee.department;
    delete employee.position;

    console.log({ employee: this.addEmployeeForm });

    this.employeeService.addEmployee(employee).subscribe();
    // this.ref.close()
  }
}
