import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
} from 'ng-apexcharts';
import {
  ApexGrid,
  ApexPlotOptions,
  ChartComponent,
} from 'ng-apexcharts/public_api';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors: any;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
};
@Component({
  selector: 'competency-level',
  templateUrl: './competency-level.component.html',
  styleUrls: ['./competency-level.component.scss'],
})
export class CompetencyLevelComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;
  positionOptions = [
    {
      label: 'Frontend',
      value: 1,
    },
    {
      label: 'Backend',
      value: 2,
    },
    {
      label: 'Business Analyst',
      value: 3,
    },
  ];
  selectedPosition!: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Junior',
          data: this.generateData(8, { min: 1, max: 5 }),
        },
        {
          name: 'Professional',
          data: this.generateData(8, { min: 1, max: 5 }),
        },
        {
          name: 'Senior',
          data: this.generateData(8, { min: 1, max: 5 }),
        },
        {
          name: 'Expert',
          data: this.generateData(8, { min: 1, max: 5 }),
        },
      ],
      chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
          show: false,
        },
        redrawOnWindowResize: true
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#008FFB'],
      title: {
        text: '',
      },
      plotOptions: {
        heatmap: {
          radius: 6,
        },
      },
      grid: {
        show: true,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        },
      },
    };
  }

  public generateData(count: number, yrange: { min: number; max: number }) {
    let i = 0;
    const series = [];
    while (i < count) {
      const x = 'w' + (i + 1).toString();
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
