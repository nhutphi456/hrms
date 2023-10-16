import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ChartModule } from 'primeng/chart';

import { HrmsTableComponent } from './hrms-table/hrms-table.component';
import { HrmsPaginationComponent } from './hrms-pagination/hrms-pagination.component';
import { HrmsScreenFilterComponent } from './hrms-screen-filter/hrms-screen-filter.component';
import { HrmsTabMenuComponent } from './hrms-tab-menu/hrms-tab-menu.component';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { HrmsChartComponent } from './hrms-chart/hrms-chart.component';
@NgModule({
  declarations: [
    HrmsTableComponent,
    HrmsPaginationComponent,
    HrmsScreenFilterComponent,
    HrmsTabMenuComponent,
    PhoneFormatPipe,
    HrmsChartComponent,
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    TableModule,
    SkeletonModule,
    TabMenuModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CheckboxModule,
    ChartModule
  ],
  exports: [
    HrmsTableComponent,
    HrmsTabMenuComponent,
    HrmsScreenFilterComponent,
    PhoneFormatPipe,
    HrmsChartComponent
  ],
})
export class ShareModule {}
