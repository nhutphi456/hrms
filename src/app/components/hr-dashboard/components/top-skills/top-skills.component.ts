import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { configPagination } from 'src/app/utils/configPagination';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';

import { topSkillsTableCol } from '../../constants/hr-dashboard.constants';
import { TopFiguresStore } from '../../store/top-performers-store.service';
import { defaultTableConfig } from '../../../../constants/app.constant';
import { ITopskillsetParams } from '../../models/hr-dashboard.model';

@Component({
  selector: 'top-skills',
  templateUrl: './top-skills.component.html',
  styleUrls: ['./top-skills.component.scss'],
})
export class TopSkillsComponent implements OnInit {
  // tableData: HrmsTable<any> = {
  //   page: 0,
  //   first: 0,
  //   rows: 0,
  //   pageCount: 0,
  //   totalRecord: 0,
  //   data: {
  //     header: topSkillsTableCol,
  //     body: [
  //       {
  //         no: 1,
  //         avgScore: 3,
  //         skill: 'Business process analysis',
  //       },
  //       {
  //         no: 2,
  //         avgScore: 3,
  //         skill: 'Business process analysis',
  //       },
  //       {
  //         no: 3,
  //         avgScore: 3,
  //         skill: 'Business process analysis',
  //       },
  //       {
  //         no: 4,
  //         avgScore: 3,
  //         skill: 'Business process analysis',
  //       },
  //       {
  //         no: 5,
  //         avgScore: 3,
  //         skill: 'Business process analysis',
  //       },
  //     ],
  //   },
  // };

  tableData: HrmsTable<any> = {
    ...defaultTableConfig,
    data: {
      header: topSkillsTableCol,
      body: [],
    },
  };
  skillSetParams: ITopskillsetParams = {
    pageNo: 1,
    pageSize: 10,
    competencyCycleId: 7,
  };
  topSkillsets$ = this.topFigureStore.topSkillsets$;

  constructor(private topFigureStore: TopFiguresStore) {}

  ngOnInit(): void {
    this.topFigureStore.getTopSkillsets(this.skillSetParams);
    this.topSkillsets$.subscribe(result => {
      const pagination = configPagination(result.pagination);
      const topSkillsets = result.data.map((s, i) => {
        return {
          no: i + 1,
          avgScore: s.proficiencyLevel.score,
          skill: s.skillSet.skillSetName,
        };
      });
      const tData = {
        ...pagination,
        data: {
          header: [...this.tableData.data.header],
          body: _.take(topSkillsets, 5),
        },
      };

      this.tableData = tData;
    });
  }
}
