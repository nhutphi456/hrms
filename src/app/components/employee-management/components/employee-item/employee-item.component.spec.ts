import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeItemComponent } from './employee-item.component';

describe('EmployeeItemComponent', () => {
  let component: EmployeeItemComponent;
  let fixture: ComponentFixture<EmployeeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeItemComponent]
    });
    fixture = TestBed.createComponent(EmployeeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
