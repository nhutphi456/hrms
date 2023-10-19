import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HrDashboardShareStore } from '../../store/hr-dashboard-share-store.service';
import { IDropdownItem } from 'src/app/models/global.model';

@Component({
  selector: 'position-filter',
  templateUrl: './position-filter.component.html',
  styleUrls: ['./position-filter.component.scss'],
})
export class PositionFilterComponent implements OnInit {
  positionOptions!: IDropdownItem[];
  selectedPosition!: IDropdownItem;

  @Output() handleSelectItem = new EventEmitter();

  constructor(private shareStore: HrDashboardShareStore) {}

  ngOnInit(): void {
    this.shareStore.getPositions();
    this.shareStore.positions$.subscribe(positions => {
      this.positionOptions = positions.map((pos) => {
        return {
          label: pos.positionName,
          value: pos.id,
        };
      });
      this.selectedPosition = this.positionOptions[0]
    });
  }

  onSelectItem() {
    this.handleSelectItem.emit(this.selectedPosition);
  }
}
