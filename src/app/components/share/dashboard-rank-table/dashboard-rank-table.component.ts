import { Component, Input } from '@angular/core';
import { HrmsTable } from '../models/hrms-table.model';

@Component({
  selector: 'app-dashboard-rank-table',
  templateUrl: './dashboard-rank-table.component.html',
  styleUrls: ['./dashboard-rank-table.component.scss']
})
export class DashboardRankTableComponent<T> {
  @Input() tableTitle!: string;
  @Input() table!: HrmsTable<T>;
}
