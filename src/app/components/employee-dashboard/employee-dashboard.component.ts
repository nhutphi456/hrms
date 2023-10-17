import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { employeeInfoLabelItems } from './constants/employee-dashboard.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent {
  labelItems: MenuItem[] = employeeInfoLabelItems;
  activeItem: MenuItem = this.labelItems[0];

  constructor(private router: Router) {

  }

  onActiveItemChange(item: MenuItem): void {
    this.router.navigate([`my-dashboard/${item.label}`])
  }
}
