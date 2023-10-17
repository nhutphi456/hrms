import { Component, OnInit } from '@angular/core';
import { colorObj } from 'src/app/components/share/hrms-chart/hrms-chart.component';

@Component({
  selector: 'competency-level-by-unit',
  templateUrl: './competency-level-by-unit.component.html',
  styleUrls: ['./competency-level-by-unit.component.scss'],
})
export class CompetencyLevelByUnitComponent implements OnInit {
  data: any;
  options: any;
  departmentOptions = [
    {
      label: 'Unit A',
      value: 1,
    },
    {
      label: 'Unit B',
      value: 2,
    },
  ];
  selectedDepartment!: any;

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );

    this.data = {
      labels: [
        'Problem solving',
        'Willingness to learn',
        'Communication',
        'Team spirit',
        'English',
        'Job knowledge',
        'Work quality',
      ],
      datasets: [
        {
          label: '2022',
          borderColor: colorObj.lightGreen,
          pointBackgroundColor: colorObj.lightGreen,
          pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: '2023',
          backgroundColor: 'rgba(205, 233, 234, 0.5)',
          borderColor: colorObj.primaryLight2,
          pointBackgroundColor: colorObj.primaryLight3,
          pointBorderColor: colorObj.primaryLight3,
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            color: textColor,
            usePointStyle: true,
          },
          position: 'bottom',
        },
      },
      scales: {
        r: {
          angleLines: {
            display: false,
          },
          grid: {
            color: textColorSecondary,
          },
          pointLabels: {
            color: textColorSecondary,
          },
        },
      },
    };
  }
}
