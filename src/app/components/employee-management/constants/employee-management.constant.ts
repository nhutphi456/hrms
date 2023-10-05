import { gql } from 'apollo-angular';
import { MenuItem } from 'primeng/api';
import { TableHeader } from 'src/app/models/global.model';

export const employeeTableCols: TableHeader[] = [
  { col: 'Name', field: 'firstName' },
  { col: 'Position', field: 'position' },
  { col: 'Email', field: 'email' },
  { col: 'Department', field: 'department' },
  { col: 'Current Contract', field: 'currentContract' },
  { col: 'Status', field: 'status' },
  { col: '', field: '' },
];

export const employeeLabelItems: MenuItem[] = [
  {
    label: 'all',
    id: '',
    title: 'All Employees',
  },
  {
    label: 'active',
    id: '0',
    title: 'Active',
  },
  {
    label: 'inactive',
    id: '1',
    title: 'Inactive',
  },
];

export const GET_EMPLOYEES = gql`
  query GetEmployees($status: Int, $departments: String) {
    employees(status: $status, departments: $departments) {
      firstName
      lastName
      gender
      dob
      position
      phone
      email
      address
      status
      department
      currentContract
    }
  }
`;
