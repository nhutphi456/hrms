import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUpload } from 'primeng/fileupload';
import { NotificationService } from 'src/app/shared/message/notification.service';
import { EmployeeStore } from '../../store/employee-management.store.service';
import { IEmployee } from '../../models/employee-management.model';
import { HelperService } from 'src/app/services/helper.service';
import {
  departments,
  genders,
  positions,
} from '../../constants/employee-management.constant';
import { EmployeeManagementService } from '../../services/employee-management.service';
@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload!: FileUpload;
  employeeDetail$ = this.employeeStore.employeeDetail$;
  defaultImg = 'assets/images/avatar-default.jpg';
  isEditOn = false;
  profileForm!: FormGroup;
  genderOptions = genders;
  departments = departments;
  positionOptions = positions;
  tempImg = '';
  employeeId!: number;

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
      this.departments = departments.map(dep => ({
        label: dep.departmentName,
        value: dep.id,
      }));
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

  initEmployeeForm(employee: IEmployee) {
    const {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      phoneNumber,
      email,
      address,
      positionLevel,
      profileBio,
      department,
      twitterLink,
      facebookLink,
      instagramLink,
      linkedinLink,
      emergencyContacts,
    } = employee;
    this.profileForm = this.fb.group({
      firstName: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      gender: [gender, Validators.required],
      dateOfBirth: [new Date(dateOfBirth), Validators.required],
      phoneNumber: [phoneNumber, Validators.required],
      email: [email, [Validators.required, Validators.email]],
      address: [address, Validators.required],
      profilePicture: '',
      positionLevel: {
        label: positionLevel.position.positionName,
        value: positionLevel.position.id,
      },
      profileBio,
      department: {
        label: department?.departmentName,
        value: department?.id,
      },
      twitterLink,
      facebookLink,
      instagramLink,
      linkedinLink,
      emergencyContacts: this.fb.array([
        ...emergencyContacts.map(({id, firstName, lastName, phoneNumber }) => {
          return this.fb.group({
            id,
            firstName: [firstName, Validators.required],
            lastName: [lastName, Validators.required],
            phoneNumber: [phoneNumber, Validators.required],
          });
        }),
      ]),
    });

    if (emergencyContacts.length === 0) {
      this.addEmergencyContact();
    }

    console.log({ profileForm: this.profileForm });
  }
  get emergencyContacts() {
    return this.profileForm.get('emergencyContacts') as FormArray;
  }

  addEmergencyContact() {
    const newContact = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
    this.emergencyContacts.push(newContact);
  }

  // Remove an emergency contact from the FormArray
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
    // this.profileForm.patchValue({
    //   avatar: this.tempImg,
    // });
    const { department, positionLevel, dateOfBirth } = this.profileForm.value;
    const updatedEmployee = {
      ...this.profileForm.value,
      // departmentId: department.value,
      // positionLevelId: positionLevel.value,
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      id: this.employeeId,
    };

    delete updatedEmployee.department;
    delete updatedEmployee.positionLevel;

    this.employeeService.updateEmployee(updatedEmployee).subscribe();
    console.log({ updatedEmployee });
  }

  onUpload(f: File): void {
    this.fileUpload.clear();
    this.fileUpload.choose();
    console.log({ f });
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
    const avaBytesArr = this.helperService.base64ToBytes(base64); // Convert base64 string to bytes
    const byteArr = Array.from(avaBytesArr);
    this.profileForm.patchValue({
      avatar: byteArr,
    });
  }
}
