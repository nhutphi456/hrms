export interface User {
  id: number;
  fullName: string;
  username: string;
  password: string;
  userRole: Role;
  token?: string;
  avatar: string;
  dob: string;
  email: string;
  fullAddress: string;
  gender: string;
  phoneNumber: string;
  facebook?: string;
  instagram?: string;
  userStatus: string;
}

export type Role = 'ADMIN' | 'MANAGER' | 'USER';

export interface LoginApiResponse {
  login: string;
}
