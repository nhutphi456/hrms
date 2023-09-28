import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { HrmsTableComponent } from './hrms-table/hrms-table.component';

@NgModule({
  declarations: [
    HrmsTableComponent
  ],
  imports: [CommonModule, PaginatorModule, TableModule],
  exports: [
    HrmsTableComponent
  ]
})
export class ShareModule {}
