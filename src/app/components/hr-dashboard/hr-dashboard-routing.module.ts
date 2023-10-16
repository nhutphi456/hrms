import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrDashboardComponent } from './hr-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HrDashboardComponent,
    data: { breadcrumbs: ['Dashboard'] },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrDashboardRoutingModule {}
