import { Component, OnInit } from '@angular/core';

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
          borderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointBackgroundColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor:
            documentStyle.getPropertyValue('--bluegray-400'),
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: '2023',
          borderColor: documentStyle.getPropertyValue('--pink-400'),
          pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
          pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
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
          },
          position: 'bottom',
        },
      },
      scales: {
        r: {
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
