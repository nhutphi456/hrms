import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSummaryDashboardComponent } from './employee-summary-dashboard.component';

describe('EmployeeSummaryDashboardComponent', () => {
  let component: EmployeeSummaryDashboardComponent;
  let fixture: ComponentFixture<EmployeeSummaryDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSummaryDashboardComponent]
    });
    fixture = TestBed.createComponent(EmployeeSummaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
