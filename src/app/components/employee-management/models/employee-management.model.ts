import { PaginatedData } from 'src/app/models/global.model';

export interface IEmployee {
  id?: string;
  firstName: string;
  lastName: string;
  gender: number;
  dateOfBirth: string;
  positionLevel: { position: { id: number, positionName: string } };
  phoneNumber: string;
  email: string;
  address: string;
  status: number;
  reportTo?: number;
  department?: Department;
  currentContract?: number;
  profileBio: string;
  skillsTags?: string[];
  joinedProjects?: Project[];
  emergencyContacts: EmergencyContact[];
  profilePicture: string;
  employeeSkills: EmployeeSkill[];
  twitterLink: string;
  facebookLink: string;
  instagramLink: string;
  linkedinLink: string;
  user: { isEnabled: boolean } | null;
}

interface Department {
  id: number;
  departmentName: string;
  sum: {
    firstName: string;
    lastName: string;
  };
}

interface EmployeeSkill {
  skill: {
    skillName: string;
  };
}
export interface Project {
  name: string;
  workAs: string;
  skillsTags: string[];
  contributedHours: number;
}

export interface EmergencyContact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export interface IEmployeeApiResponse {
  employees: PaginatedData<IEmployee>;
}

export interface IEmployeeDetailApiResponse {
  employee: IEmployee;
}

export interface IEmployeeParams {
  pageNo: number;
  status?: number;
  departments?: string[];
  types?: string[];
}

export enum ContractType {
  Fulltime = 0,
  Parttime = 1,
  Internship = 2,
}
