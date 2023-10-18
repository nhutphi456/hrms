import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import * as _ from "lodash";
import {
  colorObj
} from 'src/app/components/share/hrms-chart/hrms-chart.component';
import { CompetencyCycleStore } from '../../store/competency-cycle-store.service';
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
  plugins: any = [ChartDataLabels];
  cycleStatus$ = this.competencyCycleStore.cycleStatus$;
  barChartLabel: string[] = [];
  selfEvalData: number[] = [];
  managerEvalData: number[] = [];
  pieLabels: string[] = [];
  pieChartData: number[] = [];
  completionPercentage = 0;

  constructor(private competencyCycleStore: CompetencyCycleStore) {}

  ngOnInit() {
    this.competencyCycleStore.getDepartmentIncomplete(1);
    this.cycleStatus$.subscribe(result => {
      const { departmentInComplete, companyInComplete } = result;

      this.barChartLabel = departmentInComplete.map(
        dep => dep.department.departmentName,
      );
      this.selfEvalData = departmentInComplete.map(
        dep => dep.employeePercentage,
      );
      this.managerEvalData = departmentInComplete.map(
        dep => dep.evaluatorPercentage,
      );
      this.pieLabels = companyInComplete.map(c => c.label);
      this.pieChartData = companyInComplete.map(c => c.data);
      this.completionPercentage = _.find(companyInComplete, { label: "completed" })?.data ?? 0

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
