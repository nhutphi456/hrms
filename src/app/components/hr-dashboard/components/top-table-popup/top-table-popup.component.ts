import { Component, OnInit } from '@angular/core';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import { topPerformersTableCol } from '../../constants/hr-dashboard.constants';
import { TopPerformersStore } from '../../store/top-performers-store.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';

@Component({
  selector: 'app-top-table-popup',
  templateUrl: './top-table-popup.component.html',
  styleUrls: ['./top-table-popup.component.scss'],
})
export class TopTablePopupComponent implements OnInit {
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
  paginationParams = this.config.data.paginationParams;
  gapPageNumber = 1;

  constructor(
    private topPerformerStore: TopPerformersStore,
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
  ) {}

  ngOnInit(): void {
    this.topPerformers$.subscribe(result => {
      const { pageNo, pageSize, totalItems, totalPages } = result.pagination;
      const topPerformers = result.data.map((p, i) => {
        return {
          ...p,
          no: i + 1,
          profileImg: this.defaultImg,
        };
      });
      console.log(result.pagination)
      const tData = {
        page: pageNo,
        first: pageSize * (pageNo - 1) + 1,
        rows: pageSize,
        pageCount: totalPages,
        totalRecord: totalItems,
        data: {
          header: [...this.tableData.data.header],
          body: topPerformers,
        },
      };
      this.tableData = tData;
    });
  }

  onPageChange(e: PageChangeEvent): void {
    this.paginationParams = {
      ...this.paginationParams,
      pageNo: e.page + this.gapPageNumber,
    };
    this.topPerformerStore.getTopPerformers(this.paginationParams);
  }
}
