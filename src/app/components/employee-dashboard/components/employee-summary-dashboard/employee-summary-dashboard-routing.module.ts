import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSummaryDashboardComponent } from './employee-summary-dashboard.component';

const routes: Routes = [{
  path: '',
  component: EmployeeSummaryDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeSummaryDashboardRoutingModule { }
