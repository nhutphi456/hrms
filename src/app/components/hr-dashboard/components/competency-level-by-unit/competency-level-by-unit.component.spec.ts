import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyLevelByUnitComponent } from './competency-level-by-unit.component';

describe('CompetencyLevelByUnitComponent', () => {
  let component: CompetencyLevelByUnitComponent;
  let fixture: ComponentFixture<CompetencyLevelByUnitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetencyLevelByUnitComponent]
    });
    fixture = TestBed.createComponent(CompetencyLevelByUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
