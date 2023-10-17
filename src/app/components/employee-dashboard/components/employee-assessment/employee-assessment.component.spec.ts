import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAssessmentComponent } from './employee-assessment.component';

describe('EmployeeAssessmentComponent', () => {
  let component: EmployeeAssessmentComponent;
  let fixture: ComponentFixture<EmployeeAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAssessmentComponent]
    });
    fixture = TestBed.createComponent(EmployeeAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
