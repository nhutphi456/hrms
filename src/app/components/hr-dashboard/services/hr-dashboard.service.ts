import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_TOP_PERFORMERS } from '../constants/hr-dashboard.constants';
import { ITopPerformerApiResponse, ITopPerformerParams } from '../models/hr-dashboard.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HrDashboardService {
  constructor(private apollo: Apollo) {}

  getTopPerformers(params: ITopPerformerParams): Observable<ITopPerformerApiResponse> {
    return this.apollo.watchQuery<ITopPerformerApiResponse>({
      query: GET_TOP_PERFORMERS,
      variables: { ...params },
    }).valueChanges.pipe(map(res => res.data));
  }
}
