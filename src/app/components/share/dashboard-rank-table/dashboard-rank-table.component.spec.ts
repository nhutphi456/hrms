import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRankTableComponent } from './dashboard-rank-table.component';

describe('DashboardRankTableComponent', () => {
  let component: DashboardRankTableComponent;
  let fixture: ComponentFixture<DashboardRankTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRankTableComponent]
    });
    fixture = TestBed.createComponent(DashboardRankTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
