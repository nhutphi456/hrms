import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUpload } from 'primeng/fileupload';
import { IDropdownItem } from 'src/app/models/global.model';
import { HelperService } from 'src/app/services/helper.service';
import { NotificationService } from 'src/app/shared/message/notification.service';
import { genders } from '../../constants/employee-management.constant';
import { IEmployee } from '../../models/employee-management.model';
import { EmployeeManagementService } from '../../services/employee-management.service';
import { EmployeeStore } from '../../store/employee-management.store.service';
import { prependImage } from 'src/app/utils/prependImage';
import { concatMap, of } from 'rxjs';
import { mapToDropdownOptions } from 'src/app/utils/mapToDropdownOptions';
@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload!: FileUpload;
  employeeDetail$ = this.employeeStore.employeeDetail$;
  defaultImg = 'assets/images/profile-image-default.jpg';
  isEditOn = false;
  profileForm!: FormGroup;
  genderOptions = genders;
  departments!: IDropdownItem[];
  positionOptions!: { label: string; value: number; hasLevel: boolean, hasDepartment: boolean }[];
  jobLevelOptions!: IDropdownItem[];
  tempImg = '';
  employeeId!: number;
  isLoading = false;
  prependImage = prependImage;
  imageFile!: File;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private employeeStore: EmployeeStore,
    private helperService: HelperService,
    private employeeService: EmployeeManagementService,
  ) {}

  ngOnInit(): void {
    this.employeeStore.getDepartments();
    this.employeeStore.getPositions();
    this.employeeStore.getJobLevels();

    this.route.queryParams.subscribe(params => {
      const editParam = params['mode'];
      this.isEditOn = editParam === 'edit' ? true : false;
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.employeeStore.getEmployee(+id);
        this.employeeId = +id;
      }
    });

    this.employeeDetail$.subscribe(employee => {
      if (!employee) return;
      this.initEmployeeForm(employee);
    });

    this.employeeStore.departments$.subscribe(departments => {
      this.departments = mapToDropdownOptions(departments, 'departmentName', 'id');
    });
    this.employeeStore.positions$.subscribe(positions => {
      this.positionOptions = positions.map(pos => {
        return {
          label: pos.positionName,
          value: pos.id,
          hasLevel: pos.hasLevel,
          hasDepartment: pos.hasDepartment
        };
      });
    });
    this.employeeStore.jobLevels$.subscribe(jobLevels => {
      this.jobLevelOptions = mapToDropdownOptions(jobLevels, "jobLevelName", "id")
    });
  }

  initEmployeeForm(employee: IEmployee) {
    const {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      phoneNumber,
      address,
      positionLevel,
      profileBio,
      department,
      twitterLink,
      facebookLink,
      instagramLink,
      linkedinLink,
      emergencyContacts,
      currentContract,
    } = employee;
    this.profileForm = this.fb.group({
      firstName: [firstName, [Validators.required, Validators.maxLength(100)]],
      lastName: [lastName, [Validators.required, Validators.maxLength(100)]],
      gender: [gender, Validators.required],
      dateOfBirth: [new Date(dateOfBirth), Validators.required],
      phoneNumber: [phoneNumber, Validators.required],
      address: [address, Validators.required],
      position: {
        label: positionLevel?.position.positionName,
        value: positionLevel?.position.id,
        hasLevel: positionLevel?.position.hasLevel,
        hasDepartment: positionLevel?.position.hasDepartment
      },
      jobLevel: {
        label: positionLevel?.jobLevel?.jobLevelName,
        value: positionLevel?.jobLevel?.id,
      },
      profileBio: [profileBio, [Validators.maxLength(250)]],
      department: {
        label: department?.departmentName,
        value: department?.id,
      },
      twitterLink,
      facebookLink,
      instagramLink,
      linkedinLink,
      currentContract,
      emergencyContacts: this.fb.array([
        ...emergencyContacts.map(({ id, firstName, lastName, phoneNumber }) => {
          return this.fb.group({
            id,
            firstName: [
              firstName,
              [Validators.required, Validators.maxLength(100)],
            ],
            lastName: [
              lastName,
              [Validators.required, Validators.maxLength(100)],
            ],
            phoneNumber: [phoneNumber, Validators.required],
          });
        }),
      ]),
    });

    if (emergencyContacts.length === 0) {
      this.addEmergencyContact();
    }
  }
  get emergencyContacts() {
    return this.profileForm.get('emergencyContacts') as FormArray;
  }
  get position() {
    return this.profileForm.get('position')?.value;
  }

  addEmergencyContact() {
    const newContact = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
    this.emergencyContacts.push(newContact);
  }

  removeEmergencyContact(index: number) {
    this.emergencyContacts.removeAt(index);
  }

  openEdit() {
    this.isEditOn = true;
  }
  closeEdit() {
    this.isEditOn = false;
    this.tempImg = '';
  }

  onUpdateEmployee(): void {
    const { department, position, dateOfBirth, jobLevel } =
      this.profileForm.value;
    const updatedEmployee = {
      ...this.profileForm.value,
      departmentId: department.value ?? 0,
      positionId: position.value,
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      jobLevelId: position.hasLevel ? jobLevel.value : 0,
      id: this.employeeId,
      currentContract: 0,
    };

    delete updatedEmployee.department;
    delete updatedEmployee.position;
    delete updatedEmployee.jobLevel;

    this.employeeService
      .updateEmployee(updatedEmployee)
      .pipe(
        concatMap(() => {
          this.isLoading = true;

          if (!this.imageFile) return of(undefined);
          return this.employeeService.uploadProfileImage(
            this.employeeId,
            this.imageFile,
          );
        }),
      )
      .subscribe(() => {
        this.isLoading = false;
        this.isEditOn = false;
        this.employeeStore.getEmployee(this.employeeId);
        this.notificationService.successNotification(
          $localize`Update employee successfully`,
        );
      });
  }

  onUpload(f: File): void {
    const reader = new FileReader();
    this.fileUpload.clear();
    this.fileUpload.choose();
    this.imageFile = f;

    reader.onload = () => {
      const fileContent = reader.result as string;

      this.tempImg = fileContent;
      this.notificationService.successNotification(
        $localize`Uploaded new photo`,
      );

      this.parseToByteArray(fileContent);
    };

    reader.readAsDataURL(f);
  }

  private parseToByteArray(base64: string) {
    const avaBytesArr = this.helperService.base64ToBytes(base64); // Convert base64 string to bytes
    const byteArr = Array.from(avaBytesArr);
    this.profileForm.patchValue({
      avatar: byteArr,
    });
  }
}
