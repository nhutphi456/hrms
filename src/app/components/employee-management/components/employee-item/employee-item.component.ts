import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { prependImage } from 'src/app/utils/prependImage';
import {
  ContractType,
  IEmployee,
} from '../../models/employee-management.model';

@Component({
  selector: 'employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss'],
  providers: [MessageService],
})
export class EmployeeItemComponent implements OnChanges {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employee!: IEmployee;
  defaultImg = 'assets/images/profile-image-default.jpg';
  menuItems!: MenuItem[];
  contractType = ContractType;
  prependImage = prependImage

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
