import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';

import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { ShareModule } from '../share/share.module';
import { RoleBadgeComponent } from './components/role-badge/role-badge.component';
import { SystemHeaderComponent } from './components/system-header/system-header.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SystemAdminService } from './services/system-admin.service';
import { EmployeeAccountStore } from './store/userAccount.store.service';
import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { SystemAdminComponent } from './system-admin.component';
import { UserActivateFormComponent } from './components/user-activate-form/user-activate-form.component';

@NgModule({
  declarations: [
    SystemAdminComponent,
    UserListComponent,
    UserItemComponent,
    SystemHeaderComponent,
    RoleBadgeComponent,
    UserActivateFormComponent,
  ],
  imports: [
    CommonModule,
    SystemAdminRoutingModule,
    ShareModule,
    AppTopbarModule,
    MenuModule,
    ReactiveFormsModule,
    MultiSelectModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FileUploadModule,
    InputSwitchModule,
    FormsModule,
    CheckboxModule
  ],
  providers: [SystemAdminService, EmployeeAccountStore],
})
export class SystemAdminModule {}
