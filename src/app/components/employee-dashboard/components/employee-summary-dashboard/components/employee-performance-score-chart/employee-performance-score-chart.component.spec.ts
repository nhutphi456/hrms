import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePerformanceScoreChartComponent } from './employee-performance-score-chart.component';

describe('EmployeePerformanceScoreChartComponent', () => {
  let component: EmployeePerformanceScoreChartComponent;
  let fixture: ComponentFixture<EmployeePerformanceScoreChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeePerformanceScoreChartComponent]
    });
    fixture = TestBed.createComponent(EmployeePerformanceScoreChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
