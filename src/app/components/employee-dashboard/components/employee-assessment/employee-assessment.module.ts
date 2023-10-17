import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeAssessmentRoutingModule } from './employee-assessment-routing.module';
import { EmployeeAssessmentComponent } from './employee-assessment.component';


@NgModule({
  declarations: [EmployeeAssessmentComponent],
  imports: [
    CommonModule,
    EmployeeAssessmentRoutingModule
  ]
})
export class EmployeeAssessmentModule { }
