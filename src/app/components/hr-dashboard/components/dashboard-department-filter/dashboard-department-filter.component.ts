import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDropdownItem } from 'src/app/models/global.model';
import { HrDashboardShareStore } from '../../store/hr-dashboard-share-store.service';

@Component({
  selector: 'dashboard-department-filter',
  templateUrl: './dashboard-department-filter.component.html',
  styleUrls: ['./dashboard-department-filter.component.scss'],
})
export class DashboardDepartmentFilterComponent implements OnInit {
  departmentOptions!: IDropdownItem[];
  selectedDepartment!: IDropdownItem;
  @Input() filterType!: 'radio' | 'dropdown'
  @Output() handleSelectItem = new EventEmitter();

  constructor(private shareStore: HrDashboardShareStore) {}

  ngOnInit(): void {
    this.shareStore.getDepartments();
    this.shareStore.departments$.subscribe(departments => {
      this.departmentOptions = departments.map(dep => {
        return {
          label: dep.departmentName,
          value: dep.id,
        };
      });
    });
  }

  onSelectItem() {
    this.handleSelectItem.emit(this.selectedDepartment);
  }
}
