import { Component } from '@angular/core';
import { LayoutService } from './services/app.layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {
  isNavbarOn!: boolean;
  constructor(private layoutService: LayoutService) {
    this.layoutService.currentNavbarState.subscribe(
      state => (this.isNavbarOn = state),
    );
  }
}
