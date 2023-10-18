import { Injectable } from '@angular/core';
import { IAvgCompetencyScore, ICompetencyByLevelAndPositionParams, ICompetencyByUnit, ICompetencyByUnitParams } from '../models/hr-dashboard.model';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';
import { HrDashboardService } from '../services/hr-dashboard.service';

interface ICompetencyScoreState {
  scoreByLevelAndPosition: IAvgCompetencyScore[];
  scoreByUnit: ICompetencyByUnit;
}
@Injectable({
  providedIn: 'root',
})
export class CompetencyScoreStoreService extends ComponentStore<ICompetencyScoreState> {
  constructor(private hrDashboardService: HrDashboardService) {
    super({
      scoreByLevelAndPosition: [],
      scoreByUnit: {
        labels: [],
        datasets: []
      }
    });
  }

  //SELECTOR
  readonly scoreByLevelAndPosition$: Observable<IAvgCompetencyScore[]> =
    this.select(state => state.scoreByLevelAndPosition);
    readonly scoreByUnit$: Observable<ICompetencyByUnit> =
    this.select(state => state.scoreByUnit);
  //UPDATER
  readonly setScoreByLevelAndPosition = this.updater(
    (
      state: ICompetencyScoreState,
      scoreByLevelAndPosition: IAvgCompetencyScore[],
    ) => {
      return {
        ...state,
        scoreByLevelAndPosition,
      };
    },
  );
  readonly setScoreByUnit = this.updater(
    (
      state: ICompetencyScoreState,
      scoreByUnit: ICompetencyByUnit,
    ) => {
      return {
        ...state,
        scoreByUnit,
      };
    },
  );
  //EFFECT
  readonly getScoreByLevelAndPosition = this.effect(
    (params$: Observable<ICompetencyByLevelAndPositionParams>) =>
      params$.pipe(
        switchMap(params =>
          this.hrDashboardService.getCompetencyByLevelAndPosition(params).pipe(
            tapResponse({
              next: res => this.setScoreByLevelAndPosition(res.avgCompetencyScore),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );
  readonly getScoreByUnit = this.effect(
    (params$: Observable<ICompetencyByUnitParams>) =>
      params$.pipe(
        switchMap(params =>
          this.hrDashboardService.getCompetencyByUnit(params).pipe(
            tapResponse({
              next: res => this.setScoreByUnit(res.competencyRadarChart),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );
}
