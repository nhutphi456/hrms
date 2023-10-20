import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { IEmployeeHighestSkillApiResponse, IEmployeeImproveSkillApiResponse, IEmployeeScoreParams, IEmployeeTargetSkillApiResponse } from '../models/employee-summary-dashboard';
import { Observable, map } from 'rxjs';
import { GET_EMPLOYEE_HIGHEST_SKILL, GET_EMPLOYEE_IMPROVE_SKILL, GET_EMPLOYEE_TARGET_SKILL } from '../constants/employee-summary-dashboard.constant';

@Injectable({
  providedIn: 'root'
})
export class EmDashboardSummaryService {

  constructor(
    private apollo: Apollo
  ) { }

  getEmployeeHighestSkills(params: IEmployeeScoreParams): Observable<IEmployeeHighestSkillApiResponse>{
    return this.apollo.watchQuery<IEmployeeHighestSkillApiResponse>({
      query: GET_EMPLOYEE_HIGHEST_SKILL,
      variables: {...params}
    }).valueChanges.pipe(map(res => res.data))
  }

  getEmployeeTargetSkills(params: IEmployeeScoreParams): Observable<IEmployeeTargetSkillApiResponse>{
    return this.apollo.watchQuery<IEmployeeTargetSkillApiResponse>({
      query: GET_EMPLOYEE_TARGET_SKILL,
      variables: {...params}
    }).valueChanges.pipe(map(res => res.data))
  }
  
  getEmployeeImproveSkills(params: IEmployeeScoreParams): Observable<IEmployeeImproveSkillApiResponse>{
    return this.apollo.watchQuery<IEmployeeImproveSkillApiResponse>({
      query: GET_EMPLOYEE_IMPROVE_SKILL,
      variables: {...params}
    }).valueChanges.pipe(map(res => res.data))
  }
}
