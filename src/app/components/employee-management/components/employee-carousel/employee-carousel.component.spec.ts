import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCarouselComponent } from './employee-carousel.component';

describe('EmployeeCarouselComponent', () => {
  let component: EmployeeCarouselComponent;
  let fixture: ComponentFixture<EmployeeCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCarouselComponent]
    });
    fixture = TestBed.createComponent(EmployeeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
