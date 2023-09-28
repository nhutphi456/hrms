import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsTableComponent } from './hrms-table.component';

describe('HrmsTableComponent', () => {
  let component: HrmsTableComponent;
  let fixture: ComponentFixture<HrmsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrmsTableComponent]
    });
    fixture = TestBed.createComponent(HrmsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
