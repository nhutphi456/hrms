import { PaginatedData } from 'src/app/models/global.model';

export interface IEmployee {
  id?: string;
  firstName?: string;
  lastName?: string;
  gender: number;
  dateOfBirth: string;
  positionLevel?: IPositionLevel;
  phoneNumber?: string;
  address?: string;
  status: number;
  reportTo?: number;
  department?: Department;
  currentContract?: number;
  profileBio: string;
  skillsTags?: string[];
  joinedProjects?: Project[];
  emergencyContacts: EmergencyContact[];
  // imageSource: { id: number; imagePath: string };
  damId: number;
  employeeSkills: EmployeeSkill[];
  twitterLink: string;
  facebookLink: string;
  instagramLink: string;
  linkedinLink: string;
  user: { isEnabled: boolean; username: string } | null;
}
export interface IEmployeeInput {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  dateJoined: string;
  currentContract: number;
  profileBio: string;
  facebookLink: string;
  twitterLink: string;
  linkedinLink: string;
  instagramLink: string;
  positionLevelId: number;
  departmentId: number;
}
export interface Department {
  id: number;
  departmentName: string;
  sum: {
    firstName: string;
    lastName: string;
  };
}

interface IPositionLevel {
  position: IPosition;
  jobLevel: IJobLevel;
}

export interface IPosition {
  id: number;
  positionName: string;
  hasLevel: boolean;
  hasDepartment: boolean;
}

export interface IJobLevel {
  id: number;
  jobLevelName: string;
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
  id: number;
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

export interface IDepartmentApiResponse {
  departments: Array<Department>;
}

export interface INewEmployeeApiResponse {
  employeeOfTheMonth: IEmployee[];
}

export interface IAddEmployeeApiResponse {
  employee: IEmployee;
}
export interface IPositionApiResponse {
  positions: IPosition[];
}

export interface IJobLevelApiResponse {
  jobLevels: IJobLevel[];
}
export interface IEmployeeParams {
  status?: boolean;
  departments?: number[];
  currentContracts?: number[];
  name?: string;
  pageNo?: number;
}

export enum ContractType {
  Fulltime = 0,
  Parttime = 1,
  Internship = 2,
}
