import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeQualificationsComponent } from './employee-qualifications.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeQualificationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeQualificationsRoutingModule { }
