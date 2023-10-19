import { Component, OnInit } from '@angular/core';
import { colorObj } from 'src/app/components/share/hrms-chart/hrms-chart.component';

@Component({
  selector: 'employee-performance-score-chart',
  templateUrl: './employee-performance-score-chart.component.html',
  styleUrls: ['./employee-performance-score-chart.component.scss'],
})
export class EmployeePerformanceScoreChartComponent implements OnInit {
  options: any;
  data: any;

  ngOnInit(): void {
    this.data = {
      labels: ['H2/2023', 'H1/2023', 'H2/2022', 'H1/2022', 'H2/2021', 'H1/2021'],
      datasets: [
        {
          type: 'line',
          label: 'Trend',
          borderColor: colorObj.lightGreen,
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          data: [3, 4, 5, 2.5, 2, 4],
        },
        {
          type: 'bar',
          label: 'Performance',
          backgroundColor: colorObj.primary,
          data: [3, 4, 5, 2.5, 2, 4],
          borderColor: 'white',
          borderWidth: 2,
        },
      ],
    };

    this.options = {
      responsive: true, 
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            // color: textColorSecondary,
          },
          grid: {
            display: false
          },
        },
        y: {
          ticks: {
            // color: textColorSecondary,
          },
          grid: {
            display: false,
          },
        },
      },
    };
  }
}
