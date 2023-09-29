import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';

import { MenuItem } from './models/menu.model';
import { LayoutService } from './services/app.layout.service';

const dummies: MenuItem[] = [
  {
    name: 'Dashboard',
    icon: '',
    path: 'dashboard',
  },
  {
    name: 'User Management',
    icon: '',
    path: 'user-management',
  },
  {
    name: 'Employee Management',
    icon: '',
    path: 'employee-management',
  },
  {
    name: 'Competency Management',
    icon: '',
    path: 'competency-management',
  },
  {
    name: 'Performance Management',
    icon: '',
    path: 'performance-management',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html',
  styles: [
    `
      .active {
        @apply font-semibold opacity-100  border-secondary md:border-b-0 text-primary;
      }
      .active div {
        @apply visible flex opacity-100 pointer-events-auto;
      }
      .active.submenu {
        @apply flex;
      }
      /* For Webkit-based browsers (Chrome, Safari and Opera) */
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }

      /* For IE, Edge and Firefox */
      .scrollbar-hide {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    `,
  ],
})
export class AppSidebarComponent implements OnInit {
  isNavbarOn!: boolean;
  menuElements: MenuItem[] = dummies;
  private readonly destroy$ = new Subject();

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {
    this.getNavbarState();
  }
  getNavbarState(): void {
    this.layoutService.currentNavbarState
      .pipe(
        tap(state => (this.isNavbarOn = state)),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }
}
