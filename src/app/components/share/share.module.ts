import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { HrmsTableComponent } from './hrms-table/hrms-table.component';
import { HrmsPaginationComponent } from './hrms-pagination/hrms-pagination.component';
import { HrmsScreenFilterComponent } from './hrms-screen-filter/hrms-screen-filter.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HrmsTabMenuComponent } from './hrms-tab-menu/hrms-tab-menu.component';
@NgModule({
  declarations: [
    HrmsTableComponent,
    HrmsPaginationComponent,
    HrmsScreenFilterComponent,
    HrmsTabMenuComponent
  ],
  imports: [CommonModule, PaginatorModule, TableModule, SkeletonModule, TabMenuModule],
  exports: [
    HrmsTableComponent,
    HrmsTabMenuComponent
  ]
})
export class ShareModule {}
