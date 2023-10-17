import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexLegend,
} from 'ng-apexcharts';
import {
  ApexGrid,
  ApexPlotOptions,
  ChartComponent,
} from 'ng-apexcharts/public_api';
import { colorObj } from 'src/app/components/share/hrms-chart/hrms-chart.component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors?: any;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  legend?: ApexLegend;
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
          name: "Junior",
          data: this.generateData(8, {
            min: 1,
            max: 4
          })
        },
        {
          name: "Professional",
          data: this.generateData(8, {
            min: 1,
            max: 4
          })
        },
        {
          name: "Senior",
          data: this.generateData(8, {
            min: 1,
            max: 4
          })
        },
        {
          name: "Expert",
          data: this.generateData(8, {
            min: 1,
            max: 4
          })
        },
      ],
      chart: {
        height: 300,
        width: '90%',
        type: "heatmap",
        toolbar: { show: false },
        offsetX: 20,  
      },
      plotOptions: {
        heatmap: {
          enableShades: false,
          shadeIntensity: 0,
          radius: 10,
          colorScale: {
            ranges: [
              {
                from: 1,
                to: 1.5,
                name: "Basic",
                color: colorObj.primaryLight
              },
              {
                from: 1.6,
                to: 2.5,
                name: "Proficient",
                color: colorObj.primary
              },
              {
                from: 2.6,
                to: 3.5,
                name: "Advanced",
                color: colorObj.primaryLight2
              },
              {
                from: 3.6,
                to: 4,
                name: "Expert",
                color: colorObj.primaryLight3
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "HeatMap Chart with Color Range"
      },
      grid: {
        show: false,
      }
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
