import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IEmployeeAccount } from '../../models/system-admin.model';
import { EmployeeAccountStore } from '../../store/userAccount.store.service';
@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @HostBinding('class') hostClass = 'hrms-employee-item';
  @Input() employeeAccount!: IEmployeeAccount;
  menuItems: MenuItem[] = [
    {
      label: 'Update',
      icon: 'pi pi-pencil',
    },
  ];
  defaultImg = 'assets/images/avatar-default.jpg';
  checked = false;
  selectedAccountIds$ = this.accountStore.selectedAccountIds$;

  constructor(private accountStore: EmployeeAccountStore) {}

  ngOnInit(): void {
    this.selectedAccountIds$.subscribe(accountIds => {
      this.checked = accountIds.includes(this.employeeAccount.userId);
    });
  }
  handleEmployeeDetail() {
    return '';
  }

  onCheckChange(e: any) {
    const { checked } = e;
    console.log({checked, id: this.employeeAccount.userId})
    if (checked) {
      this.accountStore.addAccount(this.employeeAccount.userId);
    } else {
      this.accountStore.removeAccount(this.employeeAccount.userId);
    }
  }
}
