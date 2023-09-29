import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { HrmsTableComponent } from './hrms-table/hrms-table.component';
import { HrmsPaginationComponent } from './hrms-pagination/hrms-pagination.component';

@NgModule({
  declarations: [
    HrmsTableComponent,
    HrmsPaginationComponent
  ],
  imports: [CommonModule, PaginatorModule, TableModule, SkeletonModule],
  exports: [
    HrmsTableComponent
  ]
})
export class ShareModule {}
