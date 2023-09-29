import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';

import { MenuItem } from './models/menu.model';
import { LayoutService } from './services/app.layout.service';

const dummies: MenuItem[] = [
  {
    name: "Dashboard",
    icon: 'pi-home',
    path: ''
  },
  {
    name: "User Management",
    icon: 'pi-user',
    path: ''
  },
  {
    name: "Employee Management",
    icon: 'pi-user',
    path: ''
  },
  {
    name: "Competency Management",
    icon: 'pi-user',
    path: ''
  },
  {
    name: "Performance Management",
    icon: 'pi-user',
    path: ''
  }

]
@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent implements OnInit {
  isNavbarOn!: boolean;
  menuElements: MenuItem[] = dummies
  private readonly destroy$ = new Subject();

  constructor(public layoutService: LayoutService) {

  }

  ngOnInit(): void{
    this.getNavbarState()
  }
  getNavbarState(): void {
    this.layoutService.currentNavbarState
      .pipe(
        tap(state => (this.isNavbarOn = state)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
