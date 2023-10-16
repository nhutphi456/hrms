import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { colorObj, pieChartColors } from 'src/app/components/share/hrms-chart/hrms-chart.component';

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
    this.barChartData = {
      labels: ['Unit PM', 'Unit A', 'Unit B', 'Unit C', 'Unit shared service'],
      datasets: [
        {
          label: 'Self',
          backgroundColor: colorObj['primary'],
          borderColor: colorObj['primary'],
          data: [65, 59, 80, 81, 56],
        },
        {
          type: 'bar',
          label: 'Manager',
          backgroundColor: colorObj['lightGreen'],
          data: [21, 84, 24, 75, 37]
      },
      ],
    };

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
          color: 'black', // Customize label text color
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
          hoverBackgroundColor: pieChartColors
        },
      ],
    };

    this.pieOptions = {
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
}
