import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { FileUploadModule } from 'primeng/fileupload';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CarouselModule } from 'primeng/carousel';

import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeManagementService } from './services/employee-management.service';
import { EmployeeStore } from './store/employee-management.store.service';
import { ShareModule } from '../share/share.module';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeCarouselComponent } from './components/employee-carousel/employee-carousel.component';
import { ContractBadgeComponent } from './components/contract-badge/contract-badge.component';
@NgModule({
  declarations: [
    EmployeeManagementComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
    EmployeeFormComponent,
    EmployeeCardComponent,
    EmployeeCarouselComponent,
    ContractBadgeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    RouterModule,
    AppTopbarModule,
    ShareModule,
    AvatarModule,
    TableModule,
    ButtonModule,
    MenuModule,
    ReactiveFormsModule,
    MultiSelectModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FileUploadModule,
    RadioButtonModule,
    InputMaskModule,
    InputTextareaModule,
    CarouselModule
  ],
  providers: [EmployeeManagementService, EmployeeStore ],
})
export class EmployeeManagementModule {}
