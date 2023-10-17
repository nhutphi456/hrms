import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeQualificationsRoutingModule } from './employee-qualifications-routing.module';
import { EmployeeQualificationsComponent } from './employee-qualifications.component';


@NgModule({
  declarations: [EmployeeQualificationsComponent],
  imports: [
    CommonModule,
    EmployeeQualificationsRoutingModule
  ]
})
export class EmployeeQualificationsModule { }
