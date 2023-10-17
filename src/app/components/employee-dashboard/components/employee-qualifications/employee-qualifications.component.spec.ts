import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeQualificationsComponent } from './employee-qualifications.component';

describe('EmployeeQualificationsComponent', () => {
  let component: EmployeeQualificationsComponent;
  let fixture: ComponentFixture<EmployeeQualificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeQualificationsComponent]
    });
    fixture = TestBed.createComponent(EmployeeQualificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
