import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'performance-by-job-level',
  templateUrl: './performance-by-job-level.component.html',
  styleUrls: ['./performance-by-job-level.component.scss'],
})
export class PerformanceByJobLevelComponent implements OnInit {
  data: any;
  options: any;
  plugins: any = [ChartDataLabels];

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Expert', 'Senior Level', 'Professional Level', 'Junior Level'],
      datasets: [
        {
          type: 'bar',
          label: 'Dataset 1',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          data: [30, 30, 45, 10],
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          data: [30, 20, 35, 20],
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
          data: [40, 50, 20, 70],
        },
      ],
    };

    this.options = {
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
            color: textColor,
          },
        },
        dataLabels: {
          display: true,
          align: 'center',
          font: {
            weight: 'bold',
          },
          formatter: function(value: any) {
            return `${value}%`
          }
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            display: false
          },
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            display: false
          },
        },
      },
    };
  }
}
