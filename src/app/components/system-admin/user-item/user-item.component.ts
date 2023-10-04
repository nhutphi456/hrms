import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IEmployeeAccount } from '../models/system-admin.model';


@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnChanges  {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employeesAccount!: IEmployeeAccount;
  checked = false;
  ngOnChanges(changes: SimpleChanges) {
    if ('employeesAccount' in changes) {
      this.checked = this.employeesAccount?.status === 0 ? true : false;
    }
  }
  handleEmployeeDetail() {
    return ''
  }


}
