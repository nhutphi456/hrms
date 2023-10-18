import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import * as _ from "lodash"

import { topPerformersTableCol } from '../../constants/hr-dashboard.constants';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import { TopFiguresStore } from '../../store/top-performers-store.service';
import { TopTablePopupComponent } from '../top-table-popup/top-table-popup.component';

@Component({
  selector: 'top-performers',
  templateUrl: './top-performers.component.html',
  styleUrls: ['./top-performers.component.scss'],
})
export class TopPerformersComponent implements OnInit {
  defaultImg = 'assets/images/profile-image-default.jpg';
  topPerformers$ = this.topPerformerStore.topPerformers$;
  tableData: HrmsTable<any> = {
    page: 0,
    first: 0,
    rows: 0,
    pageCount: 0,
    totalRecord: 0,
    data: {
      header: topPerformersTableCol,
      body: [],
    },
  };
  popUpTableRef!: DynamicDialogRef;
  paginationParams = { pageNo: 1, pageSize: 10 }

  constructor(
    private topPerformerStore: TopFiguresStore,
    private dialogService: DialogService,
  ) {}

  ngOnInit(): void {
    this.topPerformerStore.getTopPerformers(this.paginationParams);
    this.topPerformers$.subscribe(result => {
      const { pageNo, pageSize, totalItems, totalPages } = result.pagination;
      const topPerformers = result.data.map((p, i) => {
        return {
          ...p,
          no: i + 1,
          profileImg: this.defaultImg,
        };
      });
      const tData = {
        page: pageNo,
        first: pageSize * (pageNo - 1) + 1,
        rows: pageSize,
        pageCount: totalPages,
        totalRecord: totalItems,
        data: {
          header: [...this.tableData.data.header],
          body: _.take(topPerformers, 5),
        },
      };
      this.tableData = tData;
    });
  }

  onOpenPopupTable() {
    this.popUpTableRef = this.dialogService.open(TopTablePopupComponent, {
      header: 'Top Performers',
      contentStyle: { overflow: 'visible' },
      width: '50vw',
      data: {
        paginationParams: this.paginationParams,
      },
    });
  }
}
