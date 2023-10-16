import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

  ngOnInit() {
    // Chart.register(ChartDataLabels);
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.barChartData = {
      labels: ['Unit PM', 'Unit A', 'Unit B', 'Unit C', 'Unit shared service'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [65, 59, 80, 81, 56],
        },
      ],
    };

    this.barChartOptions = {
      indexAxis: 'y',
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          display: true,
          align: 'end',
          anchor: 'end',
          color: 'black', // Customize label text color
          font: {
            weight: 'bold',
          },
          formatter: function(value: any) {
            return `${value}%`
          }
        },
      },
      scales: {
        x: {
          display: false,
          grid: {
            display: false,
          },
        },
        y: {
          position: 'left',
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            display: false,
          },
        },
      },
    };

    this.pieData = {
      labels: ['A', 'B'],
      datasets: [
        {
          data: [300, 50],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
          ],
        },
      ],
    };

    this.pieOptions = {
      cutout: '60%',
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  }
}
