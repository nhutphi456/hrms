import { Component, OnInit } from '@angular/core';
import { nineGridLabels } from '../../constants/hr-dashboard.constants';
import { HrDashboardShareStore } from '../../store/hr-dashboard-share-store.service';
import _ from 'lodash';
import { IDropdownItem } from 'src/app/models/global.model';

@Component({
  selector: 'employee-performance-grid-box',
  templateUrl: './employee-performance-grid-box.component.html',
  styleUrls: ['./employee-performance-grid-box.component.scss'],
})
export class EmployeePerformanceGridBoxComponent implements OnInit {
  basicData: any;
  plugins: any;
  basicOptions: any;
  labels: string[] = [];
  data: { x: number; y: number; image: string }[] = [];
  params = { departmentId: 1 };
  // employeesPotentialPerformance$ =
  constructor(private shareStore: HrDashboardShareStore) {
    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          data: [
            {
              x: 10,
              y: 10,
              image: 'assets/images/profile-image-default.jpg',
            },
            {
              x: 23,
              y: 57,
              image: 'assets/images/profile-image-default.jpg',
            },
            {
              x: 70,
              y: 30,
              image: 'assets/images/profile-image-default.jpg',
            },
            {
              x: 60,
              y: 60,
              image: 'assets/images/profile-image-default.jpg',
            },
          ],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1,
          usePointStyle: true,
          pointRadius: 50,
          pointStyle: (ctx: any) => {
            if (!ctx.raw || !ctx.raw.image) {
              return; // or provide a default point style
            }
            const pointImage = new Image(45, 45);
            pointImage.src = ctx.raw.image;

            return pointImage;
          },
        },
      ],
    };
    this.plugins = [nineGridLabels];
    this.basicOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      aspectRatio: 2,
      scales: {
        x: {
          min: 0,
          max: 5,
          afterTickToLabelConversion: (ctx: any) => {
            ctx.ticks = [];
            ctx.ticks.push({ value: 1.66, label: '' });
            ctx.ticks.push({ value: 3.33, label: '' });
          },

          grid: {
            drawTicks: false,
          },
          border: {
            width: 2,
            dash: [6, 6],
          },
          title: {
            display: true,
            text: 'Performance',
            color: '#0D78C9FF',
            font: {
              weight: 'bold',
            },
            padding: { top: 20, left: 0, right: 0, bottom: 20 },
          },
        },
        y: {
          min: 0,
          max: 5,
          afterTickToLabelConversion: (ctx: any) => {
            ctx.ticks = [];
            ctx.ticks.push({ value: 1.66, label: '' });
            ctx.ticks.push({ value: 3.33, label: '' });
          },
          grid: {
            drawTicks: false,
          },
          border: {
            width: 2,
            dash: [6, 6],
          },
          title: {
            display: true,
            text: 'Potential',
            color: '#0D78C9FF',
            font: {
              weight: 'bold',
            },
            padding: { top: 0, left: 0, right: 0, bottom: 40 },
          },
        },
      },
    };
  }

  ngOnInit() {
    this.shareStore.getPotentialPerformance(this.params);
    this.shareStore.employeesPotentialPerformance$.subscribe(res => {
      this.labels = _.map(
        res,
        item => `${item.employee.firstName} ${item.employee.lastName}`,
      );

      this.data = _.map(res, item => {
        return {
          x: item.potential,
          y: item.performance,
          image: item.profileImgUri,
        };
      });

      this.initChartData();
    });
  }

  initChartData() {
    const setItem = this.basicData.datasets[0];

    this.basicData = {
      ...this.basicData,
      labels: this.labels,
      datasets: [
        {
          ...setItem,
          data: this.data,
        },
      ],
    };
  }
  onSelectDepartment(e: IDropdownItem) {
    this.params = { ...this.params, departmentId: e.value };
    this.shareStore.getPotentialPerformance(this.params);
  }
}
