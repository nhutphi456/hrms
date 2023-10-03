import { Component, HostBinding, Input } from '@angular/core';
import { IEmployeeAccount } from '../models/system-admin.model';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent  {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employeesAccount!: IEmployeeAccount;


  handleEmployeeDetail() {
    return ''
  }


}
