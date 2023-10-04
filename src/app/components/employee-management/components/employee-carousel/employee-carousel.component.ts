import { Component, OnInit } from '@angular/core';
import { EmployeeStore } from '../../store/employee-management.store.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/employee-management.model';

@Component({
  selector: 'employee-carousel',
  templateUrl: './employee-carousel.component.html',
  styleUrls: ['./employee-carousel.component.scss'],
})
export class EmployeeCarouselComponent implements OnInit {
  employees$!: Observable<IEmployee[]>;
  responsiveOptions;

  constructor(private employeeStore: EmployeeStore) {
    this.responsiveOptions = [
      // {
      //   breakpoint: '1024px',
      //   numVisible: 3,
      //   numScroll: 3,
      // },
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.employees$ = this.employeeStore.employees$;
  }
}
