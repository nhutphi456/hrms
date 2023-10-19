import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import _ from 'lodash';
import { radarChartColors } from 'src/app/components/share/hrms-chart/hrms-chart.component';
import { IDropdownItem } from 'src/app/models/global.model';
import { CompetencyScoreStoreService as CompetencyScoreStore } from '../../store/competency-score-store.service';
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
  departmentOptions!: IDropdownItem[];

  constructor(
    private fb: FormBuilder,
    private competencyScoreStore: CompetencyScoreStore,
    private shareStore: HrDashboardShareStore,
  ) {
    this.initForm();
  }

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

      if (!this.cycleOptions.length) return;
      this.filterForm.patchValue({
        competencyCyclesId: [
          this.cycleOptions[0].value,
          this.cycleOptions[1].value,
        ],
      });
    });

    this.shareStore.departments$.subscribe(departments => {
      this.departmentOptions = departments.map(dep => {
        return {
          label: dep.departmentName,
          value: dep.id,
        };
      });

      if (!this.departmentOptions.length) return;
      this.filterForm.patchValue({
        departmentId: this.departmentOptions[0].value,
      });
    });

    this.competencyScoreStore.getScoreByUnit(this.scoreParams);
    this.scoreByUnit$.subscribe(result => {
      const datasets = result.datasets.map((data, i) => {
        const colorObj = radarChartColors[i];

        return {
          label: data.lineName,
          borderColor: colorObj.borderColor,
          backgroundColor: colorObj.backgroundColor,
          pointBackgroundColor: colorObj.borderColor,
          pointBorderColor: colorObj.borderColor,
          pointHoverBackgroundColor: textColor,
          pointHoverBorderColor: colorObj.borderColor,
          data: data.datasets,
        };
      });

      this.data = {
        labels: result.labels,
        datasets,
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
      departmentId: '',
      competencyCyclesId: '',
    });
  }

  onFilter() {
    const params = this.filterForm.value;
    this.competencyScoreStore.getScoreByUnit(params);
  }
}
