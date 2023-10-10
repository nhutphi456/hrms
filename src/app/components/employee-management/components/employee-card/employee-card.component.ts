import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IEmployee } from '../../models/employee-management.model';

@Component({
  selector: 'employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnChanges {
  @Input() employee!: IEmployee;
  menuItems!: MenuItem[] 
  defaultImg = "assets/images/avatar-default.jpg"

  ngOnChanges(changes: SimpleChanges): void {
    if ('employee' in changes) {
      const newEmployee = changes['employee'].currentValue;
      if (newEmployee) {
        this.menuItems = [
          {
            label: 'Edit',
            icon: 'pi pi-pencil',
            routerLink: `detail/${newEmployee.id}`,
            queryParams: { mode: 'edit' },
          },
        ];
      } else {
        this.menuItems = [];
      }
    }
  }
}
