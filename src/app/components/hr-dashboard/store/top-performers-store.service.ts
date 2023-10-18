import { Injectable } from '@angular/core';
import { PaginatedData } from 'src/app/models/global.model';
import {
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
  topSkillsets: PaginatedData<ITopSkillset>
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
      }
    });
  }

  //SELECTOR
  readonly topPerformers$: Observable<PaginatedData<ITopPerformer>> =
    this.select(state => state.topPerformers);
    readonly topSkillsets$: Observable<PaginatedData<ITopSkillset>> =
    this.select(state => state.topSkillsets);
  //UPDATER
  readonly setTopPerformers = this.updater(
    (
      state: ITopFiguresState,
      topPerformers: PaginatedData<ITopPerformer>,
    ) => {
      return {
        ...state,
        topPerformers,
      };
    },
  );
  readonly setTopSkillsets = this.updater(
    (
      state: ITopFiguresState,
      topSkillsets: PaginatedData<ITopSkillset>,
    ) => {
      return {
        ...state,
        topSkillsets,
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
}
