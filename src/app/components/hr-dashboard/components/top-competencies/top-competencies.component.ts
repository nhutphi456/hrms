import { Component, OnInit } from '@angular/core';
import { topCompetenciesTableCol } from '../../constants/hr-dashboard.constants';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';
import {
  defaultTableConfig,
  defaultImg,
} from '../../../../constants/app.constant';
import { TopFiguresStore } from '../../store/top-performers-store.service';
import { ITopCompetencyParams } from '../../models/hr-dashboard.model';
import { configPagination } from 'src/app/utils/configPagination';
import _ from 'lodash';
import { PageChangeEvent } from 'src/app/components/share/models/pagingInfo.model';

@Component({
  selector: 'top-competencies',
  templateUrl: './top-competencies.component.html',
  styleUrls: ['./top-competencies.component.scss'],
})
export class TopCompetenciesComponent implements OnInit {
  tableData: HrmsTable<any> = {
    ...defaultTableConfig,
    data: {
      header: topCompetenciesTableCol,
      body: [
        {
          no: 1,
          rating: 3.5,
          employee: {
            profileImg: 'assets/images/profile-image-default.jpg',
            firstName: 'Jason',
            lastName: 'Hud',
          },
        },
        {
          no: 2,
          rating: 3,
          employee: {
            profileImg: 'assets/images/profile-image-default.jpg',
            firstName: 'Jason',
            lastName: 'Hud',
          },
        },
        {
          no: 3,
          rating: 3,
          employee: {
            profileImg: 'assets/images/profile-image-default.jpg',
            firstName: 'Jason',
            lastName: 'Hud',
          },
        },
        {
          no: 4,
          rating: 3,
          employee: {
            profileImg: 'assets/images/profile-image-default.jpg',
            firstName: 'Jason',
            lastName: 'Hud',
          },
        },
        {
          no: 5,
          rating: 3,
          employee: {
            profileImg: 'assets/images/profile-image-default.jpg',
            firstName: 'Jason',
            lastName: 'Hud',
          },
        },
      ],
    },
  };
  tableParams: ITopCompetencyParams = { pageNo: 1, pageSize: 10 };
  topCompetencies$ = this.topFigureStore.topCompetencies$;
  isFullTableShown = false;
  gapPageNumber = 1;
  defaultImg = defaultImg;

  constructor(private topFigureStore: TopFiguresStore) {}
  ngOnInit(): void {
    this.topFigureStore.getTopCompetencies(this.tableParams);
    this.topCompetencies$.subscribe(res => {
      const pagination = configPagination(res.pagination);
      const topCompetencies = res.data.map((s, i) => {
        return {
          ...s,
          no: i + 1,
          profileImg: this.defaultImg,
        };
      });

      const tData = {
        ...pagination,
        data: {
          header: [...this.tableData.data.header],
          body: _.take(topCompetencies, 5),
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
