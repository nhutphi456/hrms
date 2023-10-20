import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class EmDashboardSummaryService {

  constructor(
    private apollo: Apollo
  ) { }

  getTopSkillset(){
    return null
  }
}
