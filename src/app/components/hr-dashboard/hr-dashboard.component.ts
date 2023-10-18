import { Component, OnInit } from '@angular/core';
import { HrDashboardShareStoreService as HrDashboardShareStore } from './store/hr-dashboard-share-store.service';
import { IDropdownItem } from 'src/app/models/global.model';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.scss'],
})
export class HrDashboardComponent implements OnInit {
  cycleOptions!: IDropdownItem[];

  constructor(private shareStore: HrDashboardShareStore) {}

  ngOnInit(): void {
    this.shareStore.getCompetencyCycles();
    this.shareStore.competencyCycles$.subscribe(cycles => {
      this.cycleOptions = cycles.map(c => {
        return {
          label: c.competencyCycleName,
          value: c.id,
        };
      });
    });
  }
}
