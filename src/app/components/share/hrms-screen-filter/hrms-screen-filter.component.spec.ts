import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsScreenFilterComponent } from './hrms-screen-filter.component';

describe('HrmsScreenFilterComponent', () => {
  let component: HrmsScreenFilterComponent;
  let fixture: ComponentFixture<HrmsScreenFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrmsScreenFilterComponent]
    });
    fixture = TestBed.createComponent(HrmsScreenFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
