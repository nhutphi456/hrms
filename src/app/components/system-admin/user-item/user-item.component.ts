import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IEmployeeAccount } from '../models/system-admin.model';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnChanges  {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employeesAccount!: IEmployeeAccount;
  checked = false;
  menuItems: MenuItem[] = [
    {
      label: 'Update',
      icon: 'pi pi-pencil',
    },
  ];
  ngOnChanges(changes: SimpleChanges) {
    if ('employeesAccount' in changes) {
      this.checked = this.employeesAccount?.status === 0 ? true : false;
    }
  }
  handleEmployeeDetail() {
    return ''
  }


}
