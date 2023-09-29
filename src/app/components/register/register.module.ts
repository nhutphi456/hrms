import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TestpasswordDirective } from './testpassword.directive';


@NgModule({
  declarations: [
    RegisterComponent,
    TestpasswordDirective
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
