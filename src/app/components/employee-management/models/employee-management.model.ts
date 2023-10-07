import { PaginatedData } from "src/app/models/global.model";

export interface IEmployee {
  id?: string;
  firstName: string;
  lastName: string;
  gender: number;
  dob: string;
  position: string;
  phone: string;
  email: string;
  address: string;
  status: number;
  reportTo: number;
  department?: string;
  currentContract?: string;
  bio: string;
  skillsTags: string[];
  joinedProjects: Project[];
  emergencyContacts: EmergencyContact[];
  avatarImg: string;
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
  phone: string;
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
