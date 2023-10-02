import { MenuItem } from 'primeng/api';
import { TableHeader } from 'src/app/models/global.model';

export const employeeTableCols: TableHeader[] = [
  { col: '', field: '' },
  { col: 'Name', field: 'firstName' },
  { col: 'Position', field: 'position' },
  { col: 'Email', field: 'email' },
  { col: 'Phone Number', field: 'phone' },
  { col: 'Department', field: 'department' },
  { col: 'Current Contract', field: 'currentContract' },
  { col: 'Status', field: 'status' },
  { col: 'Actions', field: '' },
];

export const employeeLabelItems: MenuItem[] = [
  {
    label: 'all',
    id: '0',
    title: 'All Employees',
  },
  {
    label: 'active',
    id: '1',
    title: 'Active',
  },
  {
    label: 'inactive',
    id: '2',
    title: 'Inactive',
  },
];
