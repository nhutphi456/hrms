import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemAdminRoutingModule } from './system-admin-routing.module';
import { SystemAdminComponent } from './system-admin.component';
import { ShareModule } from '../share/share.module';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { SystemAdminService } from './services/system-admin.service';
import { EmployeeAccountStore } from './store/userAccount.store.service';
import { MenuModule } from 'primeng/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SystemHeaderComponent } from './components/system-header/system-header.component';



@NgModule({
  declarations: [
    SystemAdminComponent,
    UserListComponent,
    UserItemComponent,
    SystemHeaderComponent,

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
    ShareModule,
    InputSwitchModule,
    FormsModule

  ] ,
  providers: [SystemAdminService, EmployeeAccountStore]

})
export class SystemAdminModule { }
