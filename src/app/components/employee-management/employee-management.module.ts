import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';

import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeManagementService } from './services/employee-management.service';
import { EmployeeStore } from './store/employee-management.store.service';
import { ShareModule } from '../share/share.module';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { EmployeeCarouselModule } from './components/employee-carousel/employee-carousel.module';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    EmployeeManagementComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    RouterModule,
    AppTopbarModule,
    ShareModule,
    EmployeeCarouselModule, 
    AvatarModule, 
    TableModule,
    ButtonModule,
    MenuModule,
    ReactiveFormsModule,
    MultiSelectModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FileUploadModule
  ],
  providers: [EmployeeManagementService, EmployeeStore]
})
export class EmployeeManagementModule { }
