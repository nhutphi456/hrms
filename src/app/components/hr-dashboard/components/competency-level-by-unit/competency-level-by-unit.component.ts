import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { colorObj } from 'src/app/components/share/hrms-chart/hrms-chart.component';
import { CompetencyScoreStoreService as CompetencyScoreStore } from '../../store/competency-score-store.service';
import { IDropdownItem } from 'src/app/models/global.model';
import { HrDashboardShareStore } from '../../store/hr-dashboard-share-store.service';

@Component({
  selector: 'competency-level-by-unit',
  templateUrl: './competency-level-by-unit.component.html',
  styleUrls: ['./competency-level-by-unit.component.scss'],
})
export class CompetencyLevelByUnitComponent implements OnInit {
  data: any;
  options: any;
  filterForm!: FormGroup;
  scoreByUnit$ = this.competencyScoreStore.scoreByUnit$;
  lebels: string[] = [];
  scoreParams = { competencyCyclesId: [7, 8], departmentId: 2 };
  cycleOptions!: IDropdownItem[];

  constructor(
    private fb: FormBuilder,
    private competencyScoreStore: CompetencyScoreStore,
    private shareStore: HrDashboardShareStore,
  ) {}

  ngOnInit(): void {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary',
    );
    // this.shareStore.getCompetencyCycles();
    this.shareStore.competencyCycles$.subscribe(cycles => {
      this.cycleOptions = cycles.map(c => {
        return {
          label: c.competencyCycleName,
          value: c.id,
        };
      });
    });
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
          {
            label: result.datasets[1]?.lineName,
            backgroundColor: 'rgba(205, 233, 234, 0.5)',
            borderColor: colorObj.primaryLight2,
            pointBackgroundColor: colorObj.primaryLight3,
            pointBorderColor: colorObj.primaryLight3,
            pointHoverBackgroundColor: textColor,
            pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
            data: result.datasets[1]?.datasets,
          },
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
          suggestedMin: 1,
          suggestedMax: 4,
          grid: {
            color: textColorSecondary,
          },
          pointLabels: {
            color: textColorSecondary,
          },
          ticks: {
            suggestedMin: 1,
            suggestedMax: 4,
            stepSize: 0.5,
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
