import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillStatisticComponent } from './employee-skill-statistic.component';

describe('EmployeeSkillStatisticComponent', () => {
  let component: EmployeeSkillStatisticComponent;
  let fixture: ComponentFixture<EmployeeSkillStatisticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSkillStatisticComponent]
    });
    fixture = TestBed.createComponent(EmployeeSkillStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
