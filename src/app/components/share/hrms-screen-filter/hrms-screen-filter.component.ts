import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, tap } from 'rxjs';

@Component({
  selector: 'hrms-screen-filter',
  templateUrl: './hrms-screen-filter.component.html',
  styleUrls: ['./hrms-screen-filter.component.scss'],
})
export class HrmsScreenFilterComponent implements OnInit {
  @Output() getSearchValue = new EventEmitter<string>();

  @Output() dateFilterChange = new EventEmitter<Date[]>();

  @Output() filterChange = new EventEmitter<string>();

  @Input() isDateFilterShow = true;

  searchValue!: string;

  queryField = new FormControl();

  ngOnInit(): void {
    this.getSearchValueInternal();
  }

  getDateRange(dateRange: Date[]) {
    this.dateFilterChange.emit(dateRange);
  }

  getSearchValueInternal() {
    this.queryField.valueChanges
      .pipe(
        debounceTime(500),
        tap(res => {
          this.getSearchValue.emit(res);
        }),
      )
      .subscribe();
  }
}
