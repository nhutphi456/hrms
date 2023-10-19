import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCompetencyOverallScoreComponent } from './employee-competency-overall-score.component';

describe('EmployeeCompetencyOverallScoreComponent', () => {
  let component: EmployeeCompetencyOverallScoreComponent;
  let fixture: ComponentFixture<EmployeeCompetencyOverallScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCompetencyOverallScoreComponent]
    });
    fixture = TestBed.createComponent(EmployeeCompetencyOverallScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
