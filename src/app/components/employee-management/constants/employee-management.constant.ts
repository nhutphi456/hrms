import { gql } from 'apollo-angular';
import { MenuItem } from 'primeng/api';
import { TableHeader } from 'src/app/models/global.model';

export const employeeTableCols: TableHeader[] = [
  { col: 'Name', field: 'firstName' },
  { col: 'Position', field: 'position' },
  { col: 'Email', field: 'email' },
  { col: 'Department', field: 'department' },
  { col: 'Contract', field: 'currentContract' },
  { col: 'Status', field: 'status' },
  { col: '', field: '' },
];

export const employeeLabelItems: MenuItem[] = [
  {
    label: 'all',
    id: '',
    title: 'All',
  },
  {
    label: 'active',
    id: '1',
    title: 'Active',
  },
  {
    label: 'inactive',
    id: '0',
    title: 'Inactive',
  },
];

export const genders = [
  {
    label: 'Male',
    value: 1,
  },
  {
    label: 'Female',
    value: 0,
  },
];

export const departments = [
  { label: 'Software Development', value: 1 },
  { label: 'Design', value: 2 },
  { label: 'Quality Assurance', value: 3 },
];

export const positions = [
  {
    label: 'Frontend Developer',
    value: 1,
  },
  {
    label: 'Backend Developer',
    value: 2,
  },
  {
    label: 'Business Analyst',
    value: 3,
  },
];

export const currentContracts = [
  {
    label: 'Full-time',
    value: 0,
  },
  {
    label: 'Part-time',
    value: 1,
  },
  {
    label: 'Internship',
    value: 2,
  },
];

export const GET_EMPLOYEES = gql`
  query GetEmployees(
    $status: Boolean
    $departmentIds: [Int]
    $currentContracts: [Int]
    $pageNo: Int!
    $pageSize: Int
    $name: String
  ) {
    employees(
      status: $status
      departmentIds: $departmentIds
      currentContracts: $currentContracts
      pageNo: $pageNo
      pageSize: $pageSize
      name: $name
    ) {
      pagination {
        pageNo
        pageSize
        totalItems
        totalPages
      }
      data {
        id
        firstName
        lastName
        currentContract
        damId
        address
        phoneNumber
        positionLevel {
          position {
            positionName
          }
        }
        department {
          id
          departmentName
        }
        user {
          isEnabled
          username
        }
      }
    }
  }
`;

export const GET_EMPLOYEE = gql`
  query GetEmployee($id: Int!) {
    employee(id: $id) {
      id
      firstName
      lastName
      gender
      dateOfBirth
      phoneNumber
      address
      positionLevel {
        position {
          id
          positionName
          hasLevel
          hasDepartment
        }
        jobLevel {
          id
          jobLevelName
        }
      }
      currentContract
      employeeSkills {
        skill {
          skillName
        }
      }
      damId
      profileBio
      emergencyContacts {
        id
        firstName
        lastName
        phoneNumber
      }
      department {
        id
        departmentName
        sum {
          firstName
          lastName
        }
      }
      twitterLink
      facebookLink
      instagramLink
      linkedinLink
      user {
        username
      }
    }
  }
`;

export const ADD_EMPLOYEE = gql`
  mutation AddEmployee($input: EmployeeInput!) {
    createProfile(input: $input) {
      firstName
      lastName
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($input: EmployeeInput!) {
    updateEmployee(input: $input) {
      firstName
      lastName
    }
  }
`;

export const GET_DEPARTMENTS = gql`
  query GetDepartments {
    departments {
      id
      departmentName
    }
  }
`;

export const GET_NEW_EMPLOYEES = gql`
  query GetEmployeesCarousel {
    employeeOfTheMonth {
      id
      damId
      firstName
      lastName
      user {
        username
      }
      positionLevel {
        position {
          positionName
        }
      }
      phoneNumber
      currentContract
    }
  }
`;

export const GET_POSITIONS = gql`
  query GetPositions {
    positions {
      id
      positionName
      hasLevel
      hasDepartment
    }
  }
`;

export const GET_JOB_LEVELS = gql`
  query GetJobLevels {
    jobLevels {
      id
      jobLevelName
    }
  }
`;
