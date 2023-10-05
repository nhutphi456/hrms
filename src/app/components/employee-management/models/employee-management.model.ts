export interface IEmployee {
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
}

export interface IEmployeeApiResponse {
  employees: IEmployee[];
}

export interface IEmployeeParams {
  status?: number;
  departments?: string[];
  types?: string[];
}
