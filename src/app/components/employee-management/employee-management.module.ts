import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppLayoutModule } from 'src/app/layout/app-layout.module';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeManagementService } from './services/employee-management.service';
import { EmployeeStore } from './store/employee-management.store.service';
import { ShareModule } from '../share/share.module';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { EmployeeCarouselModule } from './components/employee-carousel/employee-carousel.module';
@NgModule({
  declarations: [
    EmployeeManagementComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    AppLayoutModule,
    RouterModule,
    AppTopbarModule,
    ShareModule,
    EmployeeCarouselModule
  ],
  providers: [EmployeeManagementService, EmployeeStore]
})
export class EmployeeManagementModule { }
