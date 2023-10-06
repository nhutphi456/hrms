import { Component, HostBinding, Input } from '@angular/core';
import { IEmployee } from '../../models/employee-management.model';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss'],
  providers: [MessageService],
})
export class EmployeeItemComponent {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employee!: IEmployee;

  constructor(private router: Router) {}
  
  menuItems: MenuItem[] = [
    {
      label: 'Edit',
      icon: 'pi pi-pencil',
      routerLink: `detail/${this.employee?.id}`,
      queryParams: { mode: 'edit' },
    },
  ];

  onEdit() {
    this.router.navigate(['employee-management/edit']);
  }
}
