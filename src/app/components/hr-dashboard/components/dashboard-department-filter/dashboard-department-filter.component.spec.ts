import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDepartmentFilterComponent } from './dashboard-department-filter.component';

describe('DashboardDepartmentFilterComponent', () => {
  let component: DashboardDepartmentFilterComponent;
  let fixture: ComponentFixture<DashboardDepartmentFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardDepartmentFilterComponent]
    });
    fixture = TestBed.createComponent(DashboardDepartmentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
