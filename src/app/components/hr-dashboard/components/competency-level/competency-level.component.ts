import { Component, OnInit, ViewChild } from '@angular/core';
import * as _ from 'lodash';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexLegend,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import {
  ApexGrid,
  ApexPlotOptions,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts/public_api';
import { colorObj } from 'src/app/components/share/hrms-chart/hrms-chart.component';
import { IDropdownItem } from 'src/app/models/global.model';
import { CompetencyScoreStoreService as CompetencyScoreStore } from '../../store/competency-score-store.service';
import { HrDashboardShareStoreService } from '../../store/hr-dashboard-share-store.service';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  colors?: any;
  plotOptions: ApexPlotOptions;
  grid: ApexGrid;
  legend?: ApexLegend;
  xaxis?: ApexXAxis;
};
@Component({
  selector: 'competency-level',
  templateUrl: './competency-level.component.html',
  styleUrls: ['./competency-level.component.scss'],
})
export class CompetencyLevelComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ChartOptions;
  scoreByLevelAndPosition$ = this.competencyScoreStore.scoreByLevelAndPosition$;
  dataSeries: { name: string; data: { x: string; y: number }[] }[] = [];
  params = { positionId: 1, competencyCycleId: 7 };

  constructor(
    private competencyScoreStore: CompetencyScoreStore,
    private shareStore: HrDashboardShareStoreService,
  ) {
    this.chartOptions = {
      series: [
        // {
        //   name: 'Junior',
        //   data: this.generateData(8, {
        //     min: 1,
        //     max: 4,
        //   }),
        // },
        // {
        //   name: 'Professional',
        //   data: this.generateData(8, {
        //     min: 1,
        //     max: 4,
        //   }),
        // },
        // {
        //   name: 'Senior',
        //   data: this.generateData(8, {
        //     min: 1,
        //     max: 4,
        //   }),
        // },
        // {
        //   name: 'Expert',
        //   data: this.generateData(8, {
        //     min: 1,
        //     max: 4,
        //   }),
        // },
      ],
      chart: {
        height: 350,
        width: '90%',
        type: 'heatmap',
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
                from: 0,
                to: 1.5,
                name: 'Basic',
                color: colorObj.primaryLight,
              },
              {
                from: 1.6,
                to: 2.5,
                name: 'Proficient',
                color: colorObj.primary,
              },
              {
                from: 2.6,
                to: 3.5,
                name: 'Advanced',
                color: colorObj.primaryLight2,
              },
              {
                from: 3.6,
                to: 4,
                name: 'Expert',
                color: colorObj.primaryLight3,
              },
            ],
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: 'HeatMap Chart with Color Range',
      },
      // colors: [colorObj.primaryLight3],
      grid: {
        show: false,
      },
    };
  }

  ngOnInit(): void {
    this.shareStore.activeCycle$.subscribe(cycleId => {
      if (!cycleId) return;
      this.params = { ...this.params, competencyCycleId: cycleId };
      this.competencyScoreStore.getScoreByLevelAndPosition(this.params);
    });

    // this.competencyScoreStore.getScoreByLevelAndPosition(this.params);
    this.scoreByLevelAndPosition$.subscribe(result => {
      const series = _(result)
        .groupBy('jobLevel.jobLevelName')
        .map((values, key) => ({
          name: key,
          data: values.map(({ competency: { competencyName }, average }) => ({
            x: competencyName,
            y: average,
          })),
        }))
        .value();
      this.dataSeries = series;
      this.initHeatmapData();
    });
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

  onSelectPosition(e: IDropdownItem) {
    this.params = { ...this.params, positionId: e.value };
    this.competencyScoreStore.getScoreByLevelAndPosition(this.params);
  }

  initHeatmapData() {
    this.chartOptions = {
      ...this.chartOptions,
      series: this.dataSeries,
    };
  }
}
