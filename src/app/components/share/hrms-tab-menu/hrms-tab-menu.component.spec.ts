import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsTabMenuComponent } from './hrms-tab-menu.component';

describe('HrmsTabMenuComponent', () => {
  let component: HrmsTabMenuComponent;
  let fixture: ComponentFixture<HrmsTabMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrmsTabMenuComponent]
    });
    fixture = TestBed.createComponent(HrmsTabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
