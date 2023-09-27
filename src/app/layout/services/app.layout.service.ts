import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private isNavbarOn = new BehaviorSubject<boolean>(false);
  currentNavbarState = this.isNavbarOn.asObservable();

  changeNavbarState(state?: boolean) {
    if (state != null) {
      this.isNavbarOn.next(state);
    } else {
      let result = false;
      this.isNavbarOn.subscribe(state => (result = state));
      this.isNavbarOn.next(!result);
    }
  }
}
