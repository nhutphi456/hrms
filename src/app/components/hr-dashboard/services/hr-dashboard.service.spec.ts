import { TestBed } from '@angular/core/testing';

import { HrDashboardService } from './hr-dashboard.service';

describe('HrDashboardService', () => {
  let service: HrDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
