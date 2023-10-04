import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileUpload } from 'primeng/fileupload';
import { NotificationService } from 'src/app/shared/message/notification.service';

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
};
@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  @ViewChild('fileUpload') fileUpload!: FileUpload;
  employee = mockEmployee;
  isEditOn = false;
  profileForm!: FormGroup;

  genderOptions = [
    {
      label: 'Male',
      value: 1,
    },
    {
      label: 'Female',
      value: 0,
    },
  ];

  managerOptions = [
    { label: 'Jake Hudson', value: 1 },
    { label: 'John Newton', value: 2 },
  ];

  tempImg = '';
  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
  ) {}

  ngOnInit(): void {
    this.initEmployeeForm();
    this.route.queryParams.subscribe(params => {
      const editParam = params['mode'];
      this.isEditOn = editParam === 'edit' ? true : false;
    });
  }

  initEmployeeForm() {
    const { firstName, lastName, gender, dob, phone, email, address, manager } =
      this.employee;
    this.profileForm = this.fb.group({
      firstName,
      lastName,
      gender,
      dob,
      phone,
      email,
      address,
      avatar: '',
      manager
    });
  }

  openEdit() {
    this.isEditOn = true;
  }
  closeEdit() {
    this.isEditOn = false;
    this.tempImg = '';
  }

  onUpdateEmployee(): void {
    this.profileForm.patchValue({
      avatar: this.tempImg
    })
    console.log({ data: this.profileForm.value });
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
}
