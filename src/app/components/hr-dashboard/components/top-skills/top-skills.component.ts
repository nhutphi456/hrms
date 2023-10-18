import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import { configPagination } from 'src/app/utils/configPagination';

import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { defaultTableConfig } from '../../../../constants/app.constant';
import { topSkillsTableCol } from '../../constants/hr-dashboard.constants';
import { ITopskillsetParams } from '../../models/hr-dashboard.model';
import { HrDashboardShareStoreService } from '../../store/hr-dashboard-share-store.service';
import { TopFiguresStore } from '../../store/top-performers-store.service';

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
  };
  topSkillsets$ = this.topFigureStore.topSkillsets$;
  isFullTableShown = false;
  gapPageNumber = 1;

  constructor(
    private topFigureStore: TopFiguresStore,
    private shareStore: HrDashboardShareStoreService,
  ) {}

  ngOnInit(): void {
    this.shareStore.activeCycle$.subscribe(cycleId => {
      if (!cycleId) return;
      this.tableParams = { ...this.tableParams, competencyCycleId: cycleId };
      this.topFigureStore.getTopSkillsets(this.tableParams);
    });
    // this.topFigureStore.getTopSkillsets(this.tableParams);
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
