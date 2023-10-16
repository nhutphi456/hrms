import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsChartComponent } from './hrms-chart.component';

describe('HrmsChartComponent', () => {
  let component: HrmsChartComponent;
  let fixture: ComponentFixture<HrmsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrmsChartComponent]
    });
    fixture = TestBed.createComponent(HrmsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
