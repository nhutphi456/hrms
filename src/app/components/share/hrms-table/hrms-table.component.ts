import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { HrmsTable } from '../models/hrms-table.model';

@Component({
  selector: 'hrms-table',
  templateUrl: './hrms-table.component.html',
  styleUrls: ['./hrms-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HrmsTableComponent {
  @HostBinding('class') hostClass = 'hrms-table-host';

  @Output() pagingInfo = new EventEmitter();

  @Output() headerCheckboxChange = new EventEmitter();

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
  @Input() headerChecked: boolean | null = false;
  @Input() tableStyle: any = { 'min-width': '80rem' };

  onPageChange(event: Event) {
    this.pagingInfo.emit(event);
  }

  isNumber(val: unknown): boolean {
    return typeof val === 'number';
  }
  onHeaderCheckboxChange(e: any) {
    this.headerCheckboxChange.emit(e);
  }
}
