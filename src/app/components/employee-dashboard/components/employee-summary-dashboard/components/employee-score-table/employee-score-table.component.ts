import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { defaultTableConfig } from 'src/app/constants/app.constant';
import { topSkillsetTableCol } from '../../constants/employee-summary-dashboard.constant';

@Component({
  selector: 'employee-score-table',
  templateUrl: './employee-score-table.component.html',
  styleUrls: ['./employee-score-table.component.scss'],
})
export class EmployeeScoreTableComponent<IEmployeeScore> {
  @Input() tableData: HrmsTable<IEmployeeScore> = {
    ...defaultTableConfig,
    data: {
      header: topSkillsetTableCol,
      body: [],
    },
  };
  @Input() tableHeader!: string;
  @Output() pageChage = new EventEmitter();
  
  isFullTableShown = false;
  pageGapNumber = 1;

  onPageChange(e: PageChangeEvent) {
    console.log({ e });
    this.pageChage.emit(e)
  }

  showFullTable() {
    this.isFullTableShown = true;
  }
}
