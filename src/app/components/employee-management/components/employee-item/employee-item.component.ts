import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IEmployee } from '../../models/employee-management.model';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss'],
  providers: [MessageService],
})
export class EmployeeItemComponent implements OnChanges {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employee!: IEmployee;

  constructor(private router: Router) {}

  menuItems!: MenuItem[]

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
