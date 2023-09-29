import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { AppSidebarComponent } from './app.sidebar.component';
@NgModule({
  declarations: [
    AppSidebarComponent,
    AppLayoutComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
