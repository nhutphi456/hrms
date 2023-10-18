import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IDropdownItem } from 'src/app/models/global.model';
import { HrDashboardShareStoreService } from '../../store/hr-dashboard-share-store.service';

@Component({
  selector: 'dashboard-department-filter',
  templateUrl: './dashboard-department-filter.component.html',
  styleUrls: ['./dashboard-department-filter.component.scss'],
})
export class DashboardDepartmentFilterComponent implements OnInit {
  departmentOptions!: IDropdownItem[];
  selectedDepartment!: IDropdownItem;
  @Output() handleSelectItem = new EventEmitter();

  constructor(private shareStore: HrDashboardShareStoreService) {}

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