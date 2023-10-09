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
  ) {
    employees(
      status: $status
      departmentIds: $departmentIds
      currentContracts: $currentContracts
      pageNo: $pageNo
      pageSize: $pageSize
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
        profilePicture
        email
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
      email
      address
      positionLevel {
        position {
          id
          positionName
        }
      }
      currentContract
      employeeSkills {
        skill {
          skillName
        }
      }
      profilePicture
      profileBio
      emergencyContacts {
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
    }
  }
`;

// export const ADD_EMPLOYEE = gql`
//   mutation AddEmployee($input: EmployeeInput!) {
//     addEmployee(input: $input) {
//       firstName
//       lastName
//       dateOfBirth
//       email
//       phoneNumber
//       address
//       currentContract
//       gender
//       avatarImg
//       facebookLink
//       twitterLink
//       instagramLink
//       linkedinLink
//     }
//   }
// `;

export const ADD_EMPLOYEE = gql`
  mutation AddEmployee(
    $firstName: String!
    $lastName: String!
    $email: String!
    $gender: String!
    $dateOfBirth: String!
    $phoneNumber: String!
    $address: String!
    $dateJoined: String!
    $currentContract: Int!
    $profileBio: String!
    $facebookLink: String!
    $twitterLink: String!
    $linkedinLink: String!
    $instagramLink: String!
    $positionId: Int!
    $departmentId: Int!
  ) {
    createProfile(
      firstName: $firstName
      lastName: $lastName
      email: $email
      gender: $gender
      dateOfBirth: $dateOfBirth
      phoneNumber: $phoneNumber
      address: $address
      dateJoined: $dateJoined
      currentContract: $currentContract
      profileBio: $profileBio
      facebookLink: $facebookLink
      twitterLink: $twitterLink
      linkedinLink: $linkedinLink
      instagramLink: $instagramLink
      positionId: $positionLevelId
      departmentId: $departmentId
    ) {
      firstName
      lastName
    }
  }
`;

export const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($input: EmployeeUpdateInput!) {
    updateEmployee(input: $input)
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
      profilePicture
      firstName
      lastName
      email
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
    }
  }
`;
