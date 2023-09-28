import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';

import { MenuItem } from './models/menu.model';
import { LayoutService } from './services/app.layout.service';

const dummies: MenuItem[] = [
  {
    name: "Dashboard",
    icon: '',
    path: ''
  },
  {
    name: "User Management",
    icon: '',
    path: ''
  },
  {
    name: "Employee Management",
    icon: '',
    path: 'employee-management'
  },
  {
    name: "Competency Management",
    icon: '',
    path: ''
  },
  {
    name: "Performance Management",
    icon: '',
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
