import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { colorObj } from 'src/app/components/share/hrms-chart/hrms-chart.component';

@Component({
  selector: 'performance-by-job-level',
  templateUrl: './performance-by-job-level.component.html',
  styleUrls: ['./performance-by-job-level.component.scss'],
})
export class PerformanceByJobLevelComponent implements OnInit {
  data: any;
  options: any;
  plugins: any = [ChartDataLabels];
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
  ngOnInit() {
    this.data = {
      labels: ['Expert', 'Senior Level', 'Professional Level', 'Junior Level'],
      datasets: [
        {
          type: 'bar',
          label: 'Too early to evaluate',
          backgroundColor: colorObj.primary,
          data: [10, 20, 10, 30],
        },
        {
          type: 'bar',
          label: 'Unsatisfactory',
          backgroundColor: colorObj.primaryLight,
          data: [20, 20, 10, 8],
        },
        {
          type: 'bar',
          label: 'Partially meet expectation',
          backgroundColor: colorObj.primaryLight1,
          data: [30, 20, 10, 20],
        },
        {
          type: 'bar',
          label: 'Meet expectation',
          backgroundColor: colorObj.primaryLight4,
          data: [12, 20, 20, 20],
        },
        {
          type: 'bar',
          label: 'Partially exceed expectation',
          backgroundColor: colorObj.primaryLight2,
          data: [8, 12, 30, 10],
        },
        {
          type: 'bar',
          label: 'Oustanding',
          backgroundColor: colorObj.primaryLight3,
          data: [20, 8, 20, 12],
        },
      ],
    };

    this.options = {
      responsive: true,
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        legend: {
          labels: {
            usePointStyle: true,
            color: '#000',
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
          ticks: {
            color: '#000',
          },
          grid: {
            display: false,
          },
        },
      },
    };
  }
}
