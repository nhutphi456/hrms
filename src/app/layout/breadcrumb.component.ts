import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.style.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit{
  readonly home = { label: 'Home', url: `/`, target: '_self', icon: '' };
  menuItems: MenuItem[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.createBreadCrumb(routeData);
    });
  }

  createBreadCrumb(routeData: Data) {
    const breadcrumbs = routeData['breadcrumbs'];
    let url = '';
    breadcrumbs.forEach((route: string) => {
      //create URL (split by ' ' space and join by '-')
      url += route.toLowerCase().split(' ').join('-') + '/';

      // push new breadcrumb element into meunItem array
      this.menuItems.push({
        label: route,
        routerLink: `/${url}`,
        target: '_self',
      });
    });
  }
}
