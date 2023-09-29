import { Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { HrmsTable } from '../models/hrms-table.model';

@Component({
  selector: 'hrms-table',
  templateUrl: './hrms-table.component.html',
  styleUrls: ['./hrms-table.component.scss'],
})
export class HrmsTableComponent {
  @HostBinding('class') hostClass = 'oms-table-host';

  @Output() pagingInfo = new EventEmitter();

  @Input() isCheckboxShown = false;

  @Input() isPaginationShown = false;

  @Input() isSortIconShown = false;

  @Input() contentRef!: TemplateRef<unknown>;

  @Input() table: HrmsTable<unknown> = {
    page: 0,
    first: 0,
    rows: 0,
    pageCount: 0,
    totalRecord: 0,
    data: {
      header: [],
      body: [],
    },
  };

  onPageChange(event: Event) {
    this.pagingInfo.emit(event);
  }

  isNumber(val: unknown): boolean {
    return typeof val === 'number';
  }
}
