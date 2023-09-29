import { MenuItem } from 'primeng/api';
import { TableHeader } from 'src/app/models/global.model';

export const employeeTableCols: TableHeader[] = [
  { col: 'Name', field: 'firstName' },
  { col: 'Position', field: 'position' },
  { col: 'Email', field: 'email' },
  { col: 'Phone Number', field: 'phone' },
  { col: 'Address', field: 'address' },
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
