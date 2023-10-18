import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { colorObj } from 'src/app/components/share/hrms-chart/hrms-chart.component';
import { CompetencyScoreStoreService } from '../../store/competency-score-store.service';

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
  filterForm!: FormGroup;
  scoreByUnit$ = this.competencyScoreStore.scoreByUnit$;
  lebels: string[] = [];
  scoreParams = { competencyCyclesId: [1], departmentId: 1 };

  constructor(
    private fb: FormBuilder,
    private competencyScoreStore: CompetencyScoreStoreService,
  ) {}

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    this.competencyScoreStore.getScoreByUnit(this.scoreParams);
    this.scoreByUnit$.subscribe(result => {
      this.data = {
        labels: result.labels,
        datasets: [
          {
            label: result.datasets[0]?.lineName,
            borderColor: colorObj.lightGreen,
            pointBackgroundColor: colorObj.lightGreen,
            pointBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor:
              documentStyle.getPropertyValue('--bluegray-400'),
            data: result.datasets[0]?.datasets,
          },
          // {
          //   label: result.datasets[1]?.lineName,
          //   backgroundColor: 'rgba(205, 233, 234, 0.5)',
          //   borderColor: colorObj.primaryLight2,
          //   pointBackgroundColor: colorObj.primaryLight3,
          //   pointBorderColor: colorObj.primaryLight3,
          //   pointHoverBackgroundColor: textColor,
          //   pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
          //   data: result.datasets[1]?.datasets,
          // },
        ],
      };
    });

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
            display: true,
          },
          grid: {
            color: textColorSecondary,
          },
          pointLabels: {
            color: textColorSecondary,
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 4,
            stepSize: 1,
          },
        },
      },
    };
  }

  initForm() {
    this.filterForm = this.fb.group({
      department: '',
    });
  }
}
