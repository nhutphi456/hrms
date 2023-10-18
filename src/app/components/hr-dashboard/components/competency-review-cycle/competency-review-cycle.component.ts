import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as _ from 'lodash';
import { colorObj } from 'src/app/components/share/hrms-chart/hrms-chart.component';
import { CompetencyCycleStore } from '../../store/competency-cycle-store.service';
import { HrDashboardShareStoreService } from '../../store/hr-dashboard-share-store.service';
@Component({
  selector: 'competency-review-cycle',
  templateUrl: './competency-review-cycle.component.html',
  styleUrls: ['./competency-review-cycle.component.scss'],
})
export class CompetencyReviewCycleComponent implements OnInit {
  date!: Date;
  barChartData: any;
  barChartOptions: any;
  pieData: any;
  pieOptions: any;
  plugins = [ChartDataLabels];
  cycleStatus$ = this.competencyCycleStore.cycleStatus$;
  barChartLabel: string[] = [];
  selfEvalData: number[] = [];
  managerEvalData: number[] = [];
  pieLabels: string[] = [];
  pieChartData: number[] = [];
  completionPercentage = 0;
  cycleId!: number;

  constructor(
    private competencyCycleStore: CompetencyCycleStore,
    private shareStore: HrDashboardShareStoreService,
  ) {}

  ngOnInit() {
    this.shareStore.activeCycle$.subscribe(cycle => {
      if(!cycle) return
      this.competencyCycleStore.getDepartmentIncomplete(cycle);
    })
    this.cycleStatus$.subscribe(result => {
      const { departmentInComplete, companyInComplete } = result;

      this.barChartLabel = _.map(
        departmentInComplete,
        'department.departmentName',
      );
      this.selfEvalData = _.map(departmentInComplete, 'employeePercentage');
      this.managerEvalData = _.map(departmentInComplete, 'evaluatorPercentage');
      this.pieLabels = companyInComplete.map(c => c.label);
      this.pieChartData = companyInComplete.map(c => c.data);
      this.completionPercentage =
        _.find(companyInComplete, { label: 'completed' })?.data ?? 0;
      this.initBarChartData();
      this.initPieChartData();
    });

    this.barChartOptions = {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
        datalabels: {
          display: true,
          align: 'center',
          anchor: 'center',
          color: 'black',
          font: {
            weight: 'bold',
          },
          formatter: function (value: any) {
            return `${value}%`;
          },
        },
      },
      scales: {
        x: {
          stacked: true,
          display: false,
          grid: {
            display: false,
          },
        },
        y: {
          stacked: true,
          position: 'left',
          grid: {
            display: false,
          },
        },
      },
    };

    this.pieOptions = {
      responsive: true,
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };
  }

  private initBarChartData() {
    this.barChartData = {
      labels: this.barChartLabel,
      datasets: [
        {
          label: 'Self',
          backgroundColor: colorObj['primary'],
          borderColor: colorObj['primary'],
          data: this.selfEvalData,
        },
        {
          type: 'bar',
          label: 'Manager',
          backgroundColor: colorObj['lightGreen'],
          data: this.managerEvalData,
        },
      ],
    };
  }

  private initPieChartData() {
    this.pieData = {
      labels: this.pieLabels,
      datasets: [
        {
          data: this.pieChartData,
          backgroundColor: [colorObj.primaryLight, colorObj.primary],
          hoverBackgroundColor: [colorObj.primaryLight, colorObj.primary],
        },
      ],
    };
  }
}
