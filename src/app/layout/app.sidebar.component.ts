import { Component } from '@angular/core';
import { MenuItem } from './models/menu.model';
import { LayoutService } from './services/app.layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {
  isNavbarOn!: boolean;
  menuElements!: MenuItem[]

  constructor(public layoutService: LayoutService) {

  }
}
