import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagingInfo } from '../models/pagingInfo.model';

@Component({
  selector: 'hrms-pagination',
  templateUrl: './hrms-pagination.component.html',
  styleUrls: ['./hrms-pagination.component.scss']
})
export class HrmsPaginationComponent {
  @Output() pagingInfo = new EventEmitter();
  @Input() currentPagingInfo: PagingInfo = {
    page: 0,
    first: 0,
    rows: 0,
    pageCount: 0,
    totalRecord: 0,
  };

  onPageChange(event: unknown) {
    this.pagingInfo.emit(event);
  }
}
