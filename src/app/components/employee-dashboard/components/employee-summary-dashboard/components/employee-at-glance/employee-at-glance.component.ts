import { Component, OnInit } from '@angular/core';
import { colorObj } from 'src/app/components/share/hrms-chart/hrms-chart.component';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'employee-at-glance',
  templateUrl: './employee-at-glance.component.html',
  styleUrls: ['./employee-at-glance.component.scss'],
})
export class EmployeeAtGlanceComponent implements OnInit {
  barOptions: any;
  barData: any;
  pieData: any;
  pieOptions: any;
  plugins = [ChartDataLabels];

  ngOnInit(): void {
    this.barData = {
      labels: ['Current', 'Target'],
      datasets: [
        {
          type: 'bar',
          label: 'Current',
          backgroundColor: colorObj.primaryLight4,
          data: [4.2, 4.5],
        },

        {
          type: 'bar',
          label: 'Target',
          backgroundColor: colorObj.primaryLight,
          data: [0.8, 0.5],
        },
      ],
    };

    this.barOptions = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          display: true,
          align: 'top',
          anchor: 'end',
          color: 'black',
          font: {
            weight: 'bold',
          },
        },
        title: {
          text: 'Skill gap',
          display: true,
          position: 'bottom'
        }
      },
      scales: {
        x: {
          stacked: true,
          // display: false,
          grid: {
            display: false,
          },
        },
        y: {
          stacked: true,
          display: false,
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
          display: false,
         
        },
        title: {
          text: 'Competency Level',
          display: true,
          position: 'bottom'
        }
      },
    };

    this.pieData = {
      labels: ['Completed', 'Incompleted'],
      datasets: [
        {
          data: [93, 7],
          backgroundColor: [colorObj.primaryLight4,colorObj.primaryLight],
          hoverBackgroundColor: [colorObj.primaryLight4,colorObj.primaryLight],
        },
      ],
    };
  }
}
