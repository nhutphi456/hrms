import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSkillsComponent } from './employee-skills.component';

describe('EmployeeSkillsComponent', () => {
  let component: EmployeeSkillsComponent;
  let fixture: ComponentFixture<EmployeeSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeSkillsComponent]
    });
    fixture = TestBed.createComponent(EmployeeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
