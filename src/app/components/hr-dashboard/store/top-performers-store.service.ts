import { Injectable } from '@angular/core';
import { PaginatedData } from 'src/app/models/global.model';
import {
  ITopCompetency,
  ITopCompetencyParams,
  ITopPerformer,
  ITopPerformerParams,
  ITopSkillset,
  ITopskillsetParams,
} from '../models/hr-dashboard.model';
import { HrDashboardService } from '../services/hr-dashboard.service';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';

export interface ITopFiguresState {
  topPerformers: PaginatedData<ITopPerformer>;
  topSkillsets: PaginatedData<ITopSkillset>;
  topCompetencies: PaginatedData<ITopCompetency>;
}
@Injectable({
  providedIn: 'root',
})
export class TopFiguresStore extends ComponentStore<ITopFiguresState> {
  constructor(private hrDashboardService: HrDashboardService) {
    super({
      topPerformers: {
        pagination: {
          pageNo: 0,
          pageSize: 0,
          totalItems: 0,
          totalPages: 0,
        },
        data: [],
      },
      topSkillsets: {
        pagination: {
          pageNo: 0,
          pageSize: 0,
          totalItems: 0,
          totalPages: 0,
        },
        data: [],
      },
      topCompetencies: {
        pagination: {
          pageNo: 0,
          pageSize: 0,
          totalItems: 0,
          totalPages: 0,
        },
        data: [],
      },
    });
  }

  //SELECTOR
  readonly topPerformers$: Observable<PaginatedData<ITopPerformer>> =
    this.select(state => state.topPerformers);
  readonly topSkillsets$: Observable<PaginatedData<ITopSkillset>> = this.select(
    state => state.topSkillsets,
  );
  readonly topCompetencies$: Observable<PaginatedData<ITopCompetency>> = this.select(
    state => state.topCompetencies,
  );
  //UPDATER
  readonly setTopPerformers = this.updater(
    (state: ITopFiguresState, topPerformers: PaginatedData<ITopPerformer>) => {
      return {
        ...state,
        topPerformers,
      };
    },
  );
  readonly setTopSkillsets = this.updater(
    (state: ITopFiguresState, topSkillsets: PaginatedData<ITopSkillset>) => {
      return {
        ...state,
        topSkillsets,
      };
    },
  );
  readonly setTopCompetencies = this.updater(
    (state: ITopFiguresState, topCompetencies: PaginatedData<ITopCompetency>) => {
      return {
        ...state,
        topCompetencies,
      };
    },
  );
  //EFFECT
  readonly getTopPerformers = this.effect(
    (params$: Observable<ITopPerformerParams>) =>
      params$.pipe(
        switchMap(params =>
          this.hrDashboardService.getTopPerformers(params).pipe(
            tapResponse({
              next: res => this.setTopPerformers(res.employeesPerformance),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );

  readonly getTopSkillsets = this.effect(
    (params$: Observable<ITopskillsetParams>) =>
      params$.pipe(
        switchMap(params =>
          this.hrDashboardService.getTopSkillset(params).pipe(
            tapResponse({
              next: res => this.setTopSkillsets(res.topHighestSkillSet),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );

  readonly getTopCompetencies = this.effect(
    (params$: Observable<ITopCompetencyParams>) =>
      params$.pipe(
        switchMap(params =>
          this.hrDashboardService.getTopCompetencies(params).pipe(
            tapResponse({
              next: res => this.setTopCompetencies(res.employeesCompetency),
              error: error => console.log(error),
            }),
          ),
        ),
      ),
  );
}
