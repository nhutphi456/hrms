import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  GET_COMPETENCY_BY_LEVEL_AND_POSITION,
  GET_COMPETENCY_BY_UNIT,
  GET_COMPETENCY_CYCLES,
  GET_COMPETENCY_CYCLE_STATUS,
  GET_COMPETENCY_TIMELINE,
  GET_TOP_COMPETENCIES,
  GET_TOP_PERFORMERS,
  GET_TOP_SKILL_SETS,
} from '../constants/hr-dashboard.constants';
import {
  IAvgCompetencyScoreApiResponse,
  ICompetencyByLevelAndPositionParams,
  ICompetencyByUnitApiResponse,
  ICompetencyByUnitParams,
  ICompetencyIncompletionApiResponse,
  ICompetencyTimelineApiResponse,
  ICptCyclesApiResponse,
  ITopCompetencyApiResponse,
  ITopCompetencyParams,
  ITopPerformerApiResponse,
  ITopPerformerParams,
  ITopSkillsetApiResponse,
  ITopskillsetParams,
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

  getTopSkillset(
    params: ITopskillsetParams,
  ): Observable<ITopSkillsetApiResponse> {
    return this.apollo
      .watchQuery<ITopSkillsetApiResponse>({
        query: GET_TOP_SKILL_SETS,
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

  getCompetencyByLevelAndPosition(
    params: ICompetencyByLevelAndPositionParams,
  ): Observable<IAvgCompetencyScoreApiResponse> {
    return this.apollo
      .watchQuery<IAvgCompetencyScoreApiResponse>({
        query: GET_COMPETENCY_BY_LEVEL_AND_POSITION,
        variables: { ...params },
      })
      .valueChanges.pipe(map(res => res.data));
  }

  getCompetencyByUnit(
    params: ICompetencyByUnitParams,
  ): Observable<ICompetencyByUnitApiResponse> {
    return this.apollo
      .watchQuery<ICompetencyByUnitApiResponse>({
        query: GET_COMPETENCY_BY_UNIT,
        variables: { ...params },
      })
      .valueChanges.pipe(map(res => res.data));
  }

  getCompetencyTimeline(
    competencyCycleId: number,
  ): Observable<ICompetencyTimelineApiResponse> {
    return this.apollo
      .watchQuery<ICompetencyTimelineApiResponse>({
        query: GET_COMPETENCY_TIMELINE,
        variables: { competencyCycleId },
      })
      .valueChanges.pipe(map(res => res.data));
  }

  getCompetencyCycles(): Observable<ICptCyclesApiResponse> {
    return this.apollo
      .watchQuery<ICptCyclesApiResponse>({
        query: GET_COMPETENCY_CYCLES,
      })
      .valueChanges.pipe(map(res => res.data));
  }

  getTopCompetencies(
    params: ITopCompetencyParams,
  ): Observable<ITopCompetencyApiResponse> {
    return this.apollo
      .watchQuery<ITopCompetencyApiResponse>({
        query: GET_TOP_COMPETENCIES,
        variables: { ...params },
      })
      .valueChanges.pipe(map(res => res.data));
  }
}
