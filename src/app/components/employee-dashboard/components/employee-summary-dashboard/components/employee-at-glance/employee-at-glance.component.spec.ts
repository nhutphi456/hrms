import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAtGlanceComponent } from './employee-at-glance.component';

describe('EmployeeAtGlanceComponent', () => {
  let component: EmployeeAtGlanceComponent;
  let fixture: ComponentFixture<EmployeeAtGlanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeAtGlanceComponent]
    });
    fixture = TestBed.createComponent(EmployeeAtGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
