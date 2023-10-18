import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

interface IHrOverviewState {
  overview: {
    NumberOfDepartments: number;
  }
}

@Injectable({
  providedIn: 'root'
})
export class HrOverviewStoreService extends ComponentStore<IHrOverviewState>{
}
