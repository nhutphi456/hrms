import { gql } from 'apollo-angular';
import { MenuItem } from 'primeng/api';
import { TableHeader } from 'src/app/models/global.model';

export const userAccount: TableHeader[] = [
  { col: 'Username', field: 'username' },
  { col: 'Status', field: 'status' },
  { col: 'Created at', field: 'createdAt' },
  { col: 'Role', field: 'role' },
  { col: '', field: 'action' },
];
export const userLabelItems: MenuItem[] = [
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

export const GET_USERS = gql`
  query GetUsers($search: String, $status: Boolean, $roles: [ID], $pageNo: Int) {
    users(search: $search, roles: $roles, pageNo: $pageNo, status: $status) {
      data {
        userId
        name
        username
        createdAt
        status
        roles {
          roleId
          name
        }
      }
      pagination {
        pageNo
        pageSize
        totalItems
        totalPages
      }
    }
  }
`;

export const GET_ROLES = gql`
  query GetRoles {
    roles {
      roleId
      name
    }
  }
`;
