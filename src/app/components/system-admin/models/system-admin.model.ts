import { PaginatedData } from 'src/app/models/global.model';

export interface IEmployeeAccount {
  userId: number;
  name: string;
  username: string;
  roles?: IAccountRole[];
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

export enum EAccountRole {
  Admin = 1,
  User = 2,
  Manager = 3,
}

export interface IUpdateAccountParams {
  roles: number[];
  ids: number[];
  status: boolean;
}
