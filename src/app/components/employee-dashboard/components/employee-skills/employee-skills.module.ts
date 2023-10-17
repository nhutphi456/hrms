import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeSkillsRoutingModule } from './employee-skills-routing.module';
import { EmployeeSkillsComponent } from './employee-skills.component';


@NgModule({
  declarations: [EmployeeSkillsComponent],
  imports: [
    CommonModule,
    EmployeeSkillsRoutingModule
  ]
})
export class EmployeeSkillsModule { }
