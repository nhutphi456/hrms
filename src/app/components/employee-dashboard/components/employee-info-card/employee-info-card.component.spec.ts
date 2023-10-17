import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeInfoCardComponent } from './employee-info-card.component';

describe('EmployeeInfoCardComponent', () => {
  let component: EmployeeInfoCardComponent;
  let fixture: ComponentFixture<EmployeeInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeInfoCardComponent]
    });
    fixture = TestBed.createComponent(EmployeeInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
