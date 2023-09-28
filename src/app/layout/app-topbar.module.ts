import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopbarComponent } from './app-topbar.component';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [AppTopbarComponent, BreadcrumbComponent],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [AppTopbarComponent]
})
export class AppTopbarModule { }
