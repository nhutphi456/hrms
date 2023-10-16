import { Component, OnInit } from '@angular/core';
import { nineGridLabels } from '../../constants/hr-dashboard.constants';

@Component({
  selector: 'employee-performance-grid-box',
  templateUrl: './employee-performance-grid-box.component.html',
  styleUrls: ['./employee-performance-grid-box.component.scss'],
})
export class EmployeePerformanceGridBoxComponent implements OnInit {
  basicData: any;
  plugins: any;
  basicOptions: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [
        {
          label: 'Sales',
          data: [
            {
              x: 10,
              y: 10,
              image: 'assets/images/profile-image-default.jpg',
            },
            {
              x: 23,
              y: 57,
              image: 'assets/images/profile-image-default.jpg',
            },
          ],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
          borderWidth: 1,
          usePointStyle: true,
          pointRadius: 50,
          pointStyle: (ctx: any) => {
            const pointImage = new Image(30, 30);
            pointImage.src = ctx.raw.image;

            return pointImage;
          },
        },
      ],
    };
    this.plugins = [nineGridLabels];
    this.basicOptions = {
      plugins: {
        legend: {
          display: false,
        },
      },
      aspectRatio: 2,
      scales: {
        x: {
          min: 0,
          max: 100,
          afterTickToLabelConversion: (ctx: any) => {
            ctx.ticks = [];
            ctx.ticks.push({ value: 33.3, label: '' });
            ctx.ticks.push({ value: 66.6, label: '' });
          },

          grid: {
            drawTicks: false,
          },
          border: {
            width: 2,
            dash: [6, 6],
          },
          title: {
            display: true,
            text: 'Performance',
            color: '#0D78C9FF',
            font: {
              weight: 'bold',
            },
          },
        },
        y: {
          min: 0,
          max: 100,
          afterTickToLabelConversion: (ctx: any) => {
            ctx.ticks = [];
            ctx.ticks.push({ value: 33.3, label: '' });
            ctx.ticks.push({ value: 66.6, label: '' });
          },
          grid: {
            drawTicks: false,
          },
          border: {
            width: 2,
            dash: [6, 6],
          },
          title: {
            display: true,
            text: 'Potential',
            color: '#0D78C9FF',
            font: {
              weight: 'bold',
            },
            padding: { top: 0, left: 0, right: 0, bottom: 40 },
          },
        },
      },
    };
  }
}
