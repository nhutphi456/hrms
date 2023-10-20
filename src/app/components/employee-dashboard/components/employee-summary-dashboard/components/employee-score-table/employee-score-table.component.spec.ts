import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeScoreTableComponent } from './employee-score-table.component';

describe('EmployeeScoreTableComponent', () => {
  let component: EmployeeScoreTableComponent;
  let fixture: ComponentFixture<EmployeeScoreTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeScoreTableComponent]
    });
    fixture = TestBed.createComponent(EmployeeScoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
