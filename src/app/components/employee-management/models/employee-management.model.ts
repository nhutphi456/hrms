import { PaginatedData } from 'src/app/models/global.model';

export interface IEmployee {
  id?: string;
  firstName: string;
  lastName: string;
  gender: number;
  dateOfBirth: string;
  positionLevel: { id: number; name: string };
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
  avatarImg: string;
  employeeSkills: EmployeeSkill[];
  twitterLink: string;
  facebookLink: string;
  instagramLink: string;
  linkedinLink: string;
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
  status?: number;
  departments?: string[];
  types?: string[];
}

export enum ContractType {
  Fulltime = 0,
  Parttime = 1,
  Internship = 2,
}
