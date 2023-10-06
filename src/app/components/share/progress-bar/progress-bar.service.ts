import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {
  progressBarSubject$ = new Subject<boolean>();

  get isShowProgressBar$(): Observable<boolean> {
    return this.progressBarSubject$.asObservable();
  }

  showProgressBar(show: boolean): void {
    this.progressBarSubject$.next(show);
  }
}
