import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: '',
    data: { breadcrumbs: ['Employee Management'] },
    component: EmployeeManagementComponent,
    children: [
      {
        path: '',
        component: EmployeeListComponent,
      },
      {
        path: 'detail',
        component: EmployeeDetailComponent,
      },
      {
        path: 'edit',
        component: EmployeeEditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeManagementRoutingModule {}
