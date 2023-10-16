import { Component } from '@angular/core';
import { topCompetenciesTableCol } from '../../constants/hr-dashboard.constants';
import { HrmsTable } from 'src/app/components/share/models/hrms-table.model';

@Component({
  selector: 'top-competencies',
  templateUrl: './top-competencies.component.html',
  styleUrls: ['./top-competencies.component.scss'],
})
export class TopCompetenciesComponent {
  tableData: HrmsTable<any> = {
    page: 0,
    first: 0,
    rows: 0,
    pageCount: 0,
    totalRecord: 0,
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
}
