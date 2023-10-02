import { Component, HostBinding, Input } from '@angular/core';
import { IEmployee } from '../../models/employee-management.model';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss'],
  providers: [MessageService]
})
export class EmployeeItemComponent {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employee!: IEmployee;
  constructor(private messageService: MessageService  ) {}
  menuItems: MenuItem[] = [
    {
      label: 'Update',
      icon: 'pi pi-pencil',
    },
  ];
}
