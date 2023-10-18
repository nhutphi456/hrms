import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  colorObj,
  pieChartColors,
} from 'src/app/components/share/hrms-chart/hrms-chart.component';
import { CompetencyCycleStore } from '../../store/competency-cycle-store.service';
import { ICompetencyIncompletionStatus } from '../../models/hr-dashboard.model';

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
  departmentInComplete$ = this.competencyCycleStore.departmentInComplete$;
  departmentIncomplete: ICompetencyIncompletionStatus[] = [];
  barChartLabel: string[] = [];
  selfEvalData: number[] = [];
  managerEvalData: number[] = [];

  constructor(private competencyCycleStore: CompetencyCycleStore) {}

  ngOnInit() {
    this.competencyCycleStore.getDepartmentIncomplete(1);
    this.departmentInComplete$.subscribe(result => {
      this.departmentIncomplete = result;
      this.barChartLabel = this.departmentIncomplete.map(
        dep => dep.department.departmentName,
      );
      this.selfEvalData = this.departmentIncomplete.map(
        dep => dep.employeePercentage,
      );
      this.managerEvalData = this.departmentIncomplete.map(
        dep => dep.evaluatorPercentage,
      );

      this.initChartData();
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

    this.pieData = {
      labels: ['Completed', 'Incompleted'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: pieChartColors,
          hoverBackgroundColor: pieChartColors,
        },
      ],
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

  private initChartData() {
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
}
