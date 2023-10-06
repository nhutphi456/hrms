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
  query GetEmployees(
    $status: Int
    $departments: String
    $currentContracts: String
  ) {
    employees(
      status: $status
      departments: $departments
      currentContracts: $currentContracts
    ) {
      id
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
      avatarImg
    }
  }
`;

export const GET_EMPLOYEES_2 = gql`
  query GetEmployees(
    $status: Int
    $departments: String
    $currentContracts: String
    $page: Int
    $per_page: Int
  ) {
    employees(
      status: $status
      departments: $departments
      currentContracts: $currentContracts
      page: $page
      per_page: $per_page
    ) {
      page
      per_page
      total_pages
      total_items
      data {
        id
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
        avatarImg
      }
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query GetEmployee($id: ID) {
    employee(id: $id) {
      id
      firstName
      lastName
      gender
      dob
      phone
      email
      address
      reportTo
      position
      currentContract
      status
      department
      skillsTags
      avatarImg
      bio
      joinedProjects {
        name
        workAs
        skillTags
        contributedHours
      }
      emergencyContacts {
        firstName
        lastName
        phone
      }
    }
  }
`;
