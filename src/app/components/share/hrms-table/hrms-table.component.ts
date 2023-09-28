import { Component, Input } from '@angular/core';

@Component({
  selector: 'hrms-table',
  templateUrl: './hrms-table.component.html',
  styleUrls: ['./hrms-table.component.scss'],
})
export class HrmsTableComponent {
  @Input({ required: true }) data!: unknown[];
  @Input({ required: true }) loading!: boolean;
  @Input({ required: true }) columns!: { label: string; field: string }[];
}
