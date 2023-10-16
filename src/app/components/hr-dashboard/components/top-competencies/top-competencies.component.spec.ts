import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCompetenciesComponent } from './top-competencies.component';

describe('TopCompetenciesComponent', () => {
  let component: TopCompetenciesComponent;
  let fixture: ComponentFixture<TopCompetenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopCompetenciesComponent]
    });
    fixture = TestBed.createComponent(TopCompetenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
