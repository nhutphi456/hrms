import { Injectable } from '@angular/core';
import { PaginatedData } from 'src/app/models/global.model';
import {
  ITopPerformer,
  ITopPerformerParams,
} from '../models/hr-dashboard.model';
import { HrDashboardService } from '../services/hr-dashboard.service';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable, switchMap } from 'rxjs';

export interface ITopPerformerState {
  topPerformers: PaginatedData<ITopPerformer>;
}
@Injectable({
  providedIn: 'root',
})
export class TopPerformersStore extends ComponentStore<ITopPerformerState> {
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
    });
  }

  //SELECTOR
  readonly topPerformers$: Observable<PaginatedData<ITopPerformer>> =
    this.select(state => state.topPerformers);
  //UPDATER
  readonly setTopPerformers = this.updater(
    (
      state: ITopPerformerState,
      topPerformers: PaginatedData<ITopPerformer>,
    ) => {
      return {
        ...state,
        topPerformers,
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
}
