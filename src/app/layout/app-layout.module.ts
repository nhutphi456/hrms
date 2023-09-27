import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { AppLayoutComponent } from './app-layout.component';
import { AppTopbarComponent } from './app-topbar.component';
import { AppSidebarComponent } from './app.sidebar.component';

@NgModule({
  declarations: [AppSidebarComponent, AppLayoutComponent, AppTopbarComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
