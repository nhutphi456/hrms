import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePerformanceGridBoxComponent } from './employee-performance-grid-box.component';

describe('EmployeePerformanceGridBoxComponent', () => {
  let component: EmployeePerformanceGridBoxComponent;
  let fixture: ComponentFixture<EmployeePerformanceGridBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeePerformanceGridBoxComponent]
    });
    fixture = TestBed.createComponent(EmployeePerformanceGridBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
