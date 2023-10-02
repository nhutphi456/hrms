import { Component } from '@angular/core';

const mockEmployee = {
  firstName: 'Russel',
  lastName: 'Sims',
  gender: 'Male',
  dob: '01/01/1999',
  phone: '0313564644',
  email: 'hello@gmail.com',
  address: '12 Le Loi',
  reportTo: 'Kirk Mitrolin',
  manager: 'Drake Rogers',
  position: 'Frontend Developer',
  skillsTags: ['Html', 'Css', 'Javascript'],
  avatarImg: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png',
  joinedProjects: [
    {
      name: 'SAG',
      workAs: 'Frontend Developer',
      skillTags: ['Html', 'Css', 'Javascript'],
      contributedHours: 40,
    },
    {
      name: 'SAG',
      workAs: 'Frontend Developer',
      skillTags: ['Html', 'Css', 'Javascript'],
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
export class EmployeeDetailComponent {
  employee = mockEmployee
}
