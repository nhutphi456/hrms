import { Component } from '@angular/core';
import { LayoutService } from './services/app.layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.style.scss']
})
export class AppLayoutComponent {
  isNavbarOn!: boolean;
  constructor(private layoutService: LayoutService, private router: Router) {
    // this.router.navigate(['employee-management'])
    this.layoutService.currentNavbarState.subscribe(
      state => (this.isNavbarOn = state),
    );
  }
}
