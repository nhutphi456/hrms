import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { AppLayoutModule } from 'src/app/layout/app-layout.module';
import { RouterModule } from '@angular/router';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';


@NgModule({
  declarations: [
    EmployeeManagementComponent
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    AppLayoutModule,
    RouterModule,
    AppTopbarModule
  ]
})
export class EmployeeManagementModule { }
