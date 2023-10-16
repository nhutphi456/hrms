import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyReviewCycleComponent } from './competency-review-cycle.component';

describe('CompetencyReviewCycleComponent', () => {
  let component: CompetencyReviewCycleComponent;
  let fixture: ComponentFixture<CompetencyReviewCycleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetencyReviewCycleComponent]
    });
    fixture = TestBed.createComponent(CompetencyReviewCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
