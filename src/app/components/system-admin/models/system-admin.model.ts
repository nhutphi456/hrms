import { PaginatedData } from 'src/app/models/global.model';

export interface IEmployeeAccount {
  id?: number;
  name: string;
  username: string;
  role?: IAccountRole;
  status: boolean;
  createdAt: string;
}

export interface IAccountRole {
  roleId: number;
  name: string;
}
export interface IAccountParams {
  pageNo?: number;
  keyword?: string;
  roles?: number[];
  status?: boolean;
  pageSize?: number;
}

export interface IAccountApiResponse {
  users: PaginatedData<IEmployeeAccount>;
}

export interface IRoleApiResponse {
  roles: IAccountRole[];
}
