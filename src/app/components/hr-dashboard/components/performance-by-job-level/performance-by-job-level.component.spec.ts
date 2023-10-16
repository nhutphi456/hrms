import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceByJobLevelComponent } from './performance-by-job-level.component';

describe('PerformanceByJobLevelComponent', () => {
  let component: PerformanceByJobLevelComponent;
  let fixture: ComponentFixture<PerformanceByJobLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerformanceByJobLevelComponent]
    });
    fixture = TestBed.createComponent(PerformanceByJobLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
