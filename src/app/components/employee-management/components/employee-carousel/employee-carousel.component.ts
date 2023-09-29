import { Component, OnInit } from '@angular/core';
import { EmployeeStore } from '../../store/employee-management.store.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../models/employee-management.model';

@Component({
  selector: 'employee-carousel',
  templateUrl: './employee-carousel.component.html',
  styleUrls: ['./employee-carousel.component.scss']
})
export class EmployeeCarouselComponent implements OnInit{
  employees$!: Observable<IEmployee[]>

  constructor(private employeeStore: EmployeeStore){}

  ngOnInit(): void {
    this.employees$ = this.employeeStore.employees$
  }
}
