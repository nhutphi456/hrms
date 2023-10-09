import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

const mockEmployee = {
  firstName: 'Russel',
  lastName: 'Sims',
  gender: 'MALE',
  dob: '01/01/1999',
  phone: '0313564644',
  email: 'hello@gmail.com',
  address: '12 Le Loi',
  reportTo: 'Kirk Mitrolin',
  manager: 'Drake Rogers',
  position: 'Frontend Developer',
  skillsTags: ['HTML', 'CSS', 'JAVASCRIPT'],
  avatarImg:
    'https://www.primefaces.org/paradise-ng/assets/demo/images/avatar/ivanmagalhaes.png',
  joinedProjects: [
    {
      name: 'SAG',
      workAs: 'Frontend Developer',
      skillTags: ['HTML', 'CSS', 'JAVASCRIPT'],
      contributedHours: 40,
    },
    {
      name: 'SAG',
      workAs: 'Frontend Developer',
      skillTags: ['HTML', 'CSS', 'JAVASCRIPT'],
      contributedHours: 40,
    },
  ],
  emergencyContacts: [
    {
      firstName: 'Halley',
      lastName: 'Sims',
      phone: '0123456789',
    },
    {
      firstName: 'Halley',
      lastName: 'Sims',
      phone: '0123456789',
    },
  ],
  bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maio',
};
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
    } = employee;
    this.profileForm = this.fb.group({
      firstName: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      gender: [gender, Validators.required],
      dateOfBirth: [new Date(dateOfBirth), Validators.required],
      phoneNumber: [phoneNumber, Validators.required],
      email: [email, [Validators.required, Validators.email]],
      address: [address, Validators.required],
      avatarImg: '',
      positionLevel: {
        label: positionLevel.name,
        value: positionLevel.id,
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
    });

    console.log({ profileForm: this.profileForm });
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
