import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  GET_COMPETENCY_CYCLE_STATUS,
  GET_TOP_PERFORMERS,
} from '../constants/hr-dashboard.constants';
import {
  ICompetencyIncompletionApiResponse,
  ITopPerformerApiResponse,
  ITopPerformerParams,
} from '../models/hr-dashboard.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HrDashboardService {
  constructor(private apollo: Apollo) {}

  getTopPerformers(
    params: ITopPerformerParams,
  ): Observable<ITopPerformerApiResponse> {
    return this.apollo
      .watchQuery<ITopPerformerApiResponse>({
        query: GET_TOP_PERFORMERS,
        variables: { ...params },
      })
      .valueChanges.pipe(map(res => res.data));
  }

  getCompetencyIncompletionStatus(
    competencyCycleId: number,
  ): Observable<ICompetencyIncompletionApiResponse> {
    return this.apollo
      .watchQuery<ICompetencyIncompletionApiResponse>({
        query: GET_COMPETENCY_CYCLE_STATUS,
        variables: { competencyCycleId },
      })
      .valueChanges.pipe(map(res => res.data));
  }
}
