import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';
import { configPagination } from 'src/app/utils/configPagination';
import { defaultTableConfig, defaultImg } from '../../../../constants/app.constant';
import { topPerformersTableCol } from '../../constants/hr-dashboard.constants';
import { TopFiguresStore } from '../../store/top-figures-store.service';

@Component({
  selector: 'top-performers',
  templateUrl: './top-performers.component.html',
  styleUrls: ['./top-performers.component.scss'],
})
export class TopPerformersComponent implements OnInit {
  defaultImg = defaultImg;
  topPerformers$ = this.topFigureScore.topPerformers$;
  tableData: HrmsTable<any> = {
    ...defaultTableConfig,
    data: {
      header: topPerformersTableCol,
      body: [],
    },
  };
  popUpTableRef!: DynamicDialogRef;
  tableParams = { pageNo: 1, pageSize: 10 };
  isFullTableShown = false;
  gapPageNumber = 1;

  constructor(
    private topFigureScore: TopFiguresStore,
  ) {}

  ngOnInit(): void {
    this.topFigureScore.getTopPerformers(this.tableParams);
    this.topPerformers$.subscribe(result => {
      const pagination = configPagination(result.pagination);

      const topPerformers = result.data.map((p, i) => {
        return {
          ...p,
          no: i + 1,
          profileImg: this.defaultImg,
        };
      });
      const tData = {
        ...pagination,
        data: {
          header: [...this.tableData.data.header],
          body: _.take(topPerformers, 5),
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
    this.topFigureScore.getTopSkillsets(this.tableParams);
  }
}
