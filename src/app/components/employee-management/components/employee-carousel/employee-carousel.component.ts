import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/employee-management.model';
import { EmployeeStore } from '../../store/employee-management.store.service';

const mockCarouselData = [
  {
    id: 39,
    firstName: 'Kameron',
    lastName: 'Price',
    email: 'Roberta_Weber@yahoo.com',
    gender: 'Male',
    dateOfBirth: '2023-07-09T22:41:02.587Z',
    address: '2766 Howell Spring',
    phoneNumber: '738.918.6150',
    positionLevel: { position: { positionName: 'Business Analyst' } },
    dateJoined: '2022-11-09T16:27:21.426Z',
    currentContract: 1,
    profileBio:
      'Crustulum omnis tonsor uter. Quis omnis bellicus autem tristis. Talus dens creator super enim arceo.',
    facebookLink: 'https://bustling-doe.org/',
    twitterLink: 'https://prime-knowledge.com',
    linkedinLink: 'https://lively-energy.org',
    instagramLink: 'https://devoted-orient.com/',
    status: 1,
    profilePicture: 'https://avatars.githubusercontent.com/u/32126920',
  },
  {
    id: 39,
    firstName: 'Kameron',
    lastName: 'Price',
    email: 'Roberta_Weber@yahoo.com',
    gender: 'Male',
    dateOfBirth: '2023-07-09T22:41:02.587Z',
    address: '2766 Howell Spring',
    phoneNumber: '738.918.6150',
    positionLevel: { position: { positionName: 'Business Analyst' } },
    dateJoined: '2022-11-09T16:27:21.426Z',
    currentContract: 1,
    profileBio:
      'Crustulum omnis tonsor uter. Quis omnis bellicus autem tristis. Talus dens creator super enim arceo.',
    facebookLink: 'https://bustling-doe.org/',
    twitterLink: 'https://prime-knowledge.com',
    linkedinLink: 'https://lively-energy.org',
    instagramLink: 'https://devoted-orient.com/',
    status: 1,
    profilePicture: 'https://avatars.githubusercontent.com/u/32126920',
  },
  {
    id: 39,
    firstName: 'Kameron',
    lastName: 'Price',
    email: 'Roberta_Weber@yahoo.com',
    gender: 'Male',
    dateOfBirth: '2023-07-09T22:41:02.587Z',
    address: '2766 Howell Spring',
    phoneNumber: '738.918.6150',
    positionLevel: { position: { positionName: 'Business Analyst' } },
    dateJoined: '2022-11-09T16:27:21.426Z',
    currentContract: 1,
    profileBio:
      'Crustulum omnis tonsor uter. Quis omnis bellicus autem tristis. Talus dens creator super enim arceo.',
    facebookLink: 'https://bustling-doe.org/',
    twitterLink: 'https://prime-knowledge.com',
    linkedinLink: 'https://lively-energy.org',
    instagramLink: 'https://devoted-orient.com/',
    status: 1,
    profilePicture: 'https://avatars.githubusercontent.com/u/32126920',
  },
];
@Component({
  selector: 'employee-carousel',
  templateUrl: './employee-carousel.component.html',
  styleUrls: ['./employee-carousel.component.scss'],
})
export class EmployeeCarouselComponent implements OnInit {
  employees$: Observable<IEmployee[]> = this.employeeStore.newEmployee$;
  responsiveOptions;

  constructor(private employeeStore: EmployeeStore) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.employeeStore.getNewEmployees();
  }
}
