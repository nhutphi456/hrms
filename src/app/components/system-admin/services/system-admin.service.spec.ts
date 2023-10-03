/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SystemAdminService } from './system-admin.service';

describe('Service: SystemAdmin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemAdminService]
    });
  });

  it('should ...', inject([SystemAdminService], (service: SystemAdminService) => {
    expect(service).toBeTruthy();
  }));
});
