import { Component } from '@angular/core';

import { topSkillsTableCol } from '../../constants/hr-dashboard.constants';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';

@Component({
  selector: 'top-skills',
  templateUrl: './top-skills.component.html',
  styleUrls: ['./top-skills.component.scss'],
})
export class TopSkillsComponent {
  tableData: HrmsTable<any> = {
    page: 0,
    first: 0,
    rows: 0,
    pageCount: 0,
    totalRecord: 0,
    data: {
      header: topSkillsTableCol,
      body: [
        {
          no: 1,
          avgScore: 3,
          skill: 'Business process analysis',
        },
        {
          no: 2,
          avgScore: 3,
          skill: 'Business process analysis',
        },
        {
          no: 3,
          avgScore: 3,
          skill: 'Business process analysis',
        },
        {
          no: 4,
          avgScore: 3,
          skill: 'Business process analysis',
        },
        {
          no: 5,
          avgScore: 3,
          skill: 'Business process analysis',
        },
      ],
    },
  };
}
