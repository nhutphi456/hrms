import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileUpload } from 'primeng/fileupload';
import { IDropdownItem } from 'src/app/models/global.model';
import { HelperService } from 'src/app/services/helper.service';
import { NotificationService } from 'src/app/shared/message/notification.service';
import { EmployeeManagementService } from '../../services/employee-management.service';
import { EmployeeStore } from '../../store/employee-management.store.service';

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

  departmentOptions!: IDropdownItem[];
  positionOptions!: { label: string; value: number; hasLevel: boolean }[];
  jobLevelOptions!: IDropdownItem[];
  tempImg = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    private notificationService: NotificationService,
    private employeeStore: EmployeeStore,
    private employeeService: EmployeeManagementService,
    private helperService: HelperService,
  ) {}

  get currentContract() {
    return this.addEmployeeForm.get('currentContract')?.value;
  }

  get formControls() {
    return this.addEmployeeForm.controls;
  }

  get emergencyContacts() {
    return this.addEmployeeForm.get('emergencyContacts') as FormArray;
  }

  get position() {
    return this.addEmployeeForm.get('position')?.value;
  }

  ngOnInit(): void {
    this.initForm();
    this.employeeStore.getPositions();
    this.employeeStore.getDepartments();
    this.employeeStore.getJobLevels();

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
          hasLevel: pos.hasLevel,
        };
      });
    });
    this.employeeStore.jobLevels$.subscribe(jobLevels => {
      this.jobLevelOptions = jobLevels.map(level => {
        return {
          label: level.jobLevelName,
          value: level.id,
        };
      });
    });
  }
  initForm() {
    this.addEmployeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.maxLength(100)]],
      dateOfBirth: ['', Validators.required],
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
      jobLevel: '',
      profileBio: '',
      emergencyContacts: this.fb.array([
        this.fb.group({
          firstName: ['', [Validators.required, Validators.maxLength(100)]],
          lastName: ['', [Validators.required, Validators.maxLength(100)]],
          phoneNumber: ['', Validators.required],
        }),
      ]),
    });
  }

  addEmergencyContact() {
    const newContact = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.maxLength(100)]],
      phoneNumber: ['', Validators.required],
    });
    this.emergencyContacts.push(newContact);
  }

  // Remove an emergency contact from the FormArray
  removeEmergencyContact(index: number) {
    this.emergencyContacts.removeAt(index);
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
    this.addEmployeeForm.patchValue({
      avatarImg: byteArr,
    });
  }

  onSubmit() {
    const { department, position, dateOfBirth, jobLevel } =
      this.addEmployeeForm.value;
    const employee = {
      ...this.addEmployeeForm.value,
      departmentId: department.value,
      positionId: position.value,
      jobLevelId: jobLevel.value ?? 0,
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      // avatarImg: '',
    };

    delete employee.department;
    delete employee.position;
    delete employee.jobLevel;

    console.log({ formvalue: this.addEmployeeForm.value });
    console.log({ employee });

    this.employeeService
      .addEmployee(employee)
      .pipe(o$ => {
        this.isLoading = true;
        return o$;
      })
      .subscribe(() => {
        this.isLoading = false;
        this.notificationService.successNotification(
          $localize`Add new employee successfully`,
        );
        this.ref.close();
      });
  }
}
