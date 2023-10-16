import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyLevelComponent } from './competency-level.component';

describe('CompetencyLevelComponent', () => {
  let component: CompetencyLevelComponent;
  let fixture: ComponentFixture<CompetencyLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetencyLevelComponent]
    });
    fixture = TestBed.createComponent(CompetencyLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
