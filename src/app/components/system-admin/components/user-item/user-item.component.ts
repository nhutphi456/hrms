import { Component, HostBinding, Input } from '@angular/core';
import { IEmployeeAccount } from '../../models/system-admin.model';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employeeAccount!: IEmployeeAccount;
  checked = false;
  menuItems: MenuItem[] = [
    {
      label: 'Update',
      icon: 'pi pi-pencil',
    },
  ];
  defaultImg = 'assets/images/avatar-default.jpg';

  handleEmployeeDetail() {
    return ''
  }
}
