import { Component, HostBinding, Input } from '@angular/core';
import { IEmployee } from '../../models/employee-management.model';

@Component({
  selector: 'employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employee!: IEmployee

  handleEmployeeDetail() {
    return ''
  }
}
