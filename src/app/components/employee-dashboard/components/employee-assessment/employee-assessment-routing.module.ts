import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAssessmentComponent } from './employee-assessment.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeAssessmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeAssessmentRoutingModule { }
