import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { SystemAdminComponent } from './system-admin.component';
import { ShareModule } from '../share/share.module';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { SystemAdminService } from './services/system-admin.service';
import { EmployeeAccountStore } from './store/userAccount.store.service';


@NgModule({
  declarations: [
    SystemAdminComponent,
    UserListComponent,
    UserItemComponent,

  ],
  imports: [
    CommonModule,
    SystemAdminRoutingModule,
    ShareModule,
    AppTopbarModule

  ] ,
  providers: [SystemAdminService, EmployeeAccountStore]

})
export class SystemAdminModule { }
