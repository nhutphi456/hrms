import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSkillsComponent } from './employee-skills.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeSkillsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeSkillsRoutingModule {}
