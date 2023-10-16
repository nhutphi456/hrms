import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrOverviewComponent } from './hr-overview.component';

describe('HrOverviewComponent', () => {
  let component: HrOverviewComponent;
  let fixture: ComponentFixture<HrOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrOverviewComponent]
    });
    fixture = TestBed.createComponent(HrOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
