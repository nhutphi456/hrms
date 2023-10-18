import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { configPagination } from 'src/app/utils/configPagination';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';

import { topSkillsTableCol } from '../../constants/hr-dashboard.constants';
import { TopFiguresStore } from '../../store/top-performers-store.service';
import { defaultTableConfig } from '../../../../constants/app.constant';
import { ITopskillsetParams } from '../../models/hr-dashboard.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';

@Component({
  selector: 'top-skills',
  templateUrl: './top-skills.component.html',
  styleUrls: ['./top-skills.component.scss'],
})
export class TopSkillsComponent implements OnInit {
  tableData: HrmsTable<any> = {
    ...defaultTableConfig,
    data: {
      header: topSkillsTableCol,
      body: [],
    },
  };
  tableParams: ITopskillsetParams = {
    pageNo: 1,
    pageSize: 10,
    competencyCycleId: 7,
  };
  topSkillsets$ = this.topFigureStore.topSkillsets$;
  isFullTableShown = false;
  gapPageNumber = 1;

  constructor(private topFigureStore: TopFiguresStore) {}

  ngOnInit(): void {
    this.topFigureStore.getTopSkillsets(this.tableParams);
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

  showFullTable() {
    this.isFullTableShown = true;
  }
  onPageChange(e: PageChangeEvent): void {
    this.tableParams = {
      ...this.tableParams,
      pageNo: e.page + this.gapPageNumber,
    };
    this.topFigureStore.getTopSkillsets(this.tableParams);
  }
}
