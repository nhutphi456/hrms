import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsPaginationComponent } from './hrms-pagination.component';

describe('HrmsPaginationComponent', () => {
  let component: HrmsPaginationComponent;
  let fixture: ComponentFixture<HrmsPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrmsPaginationComponent]
    });
    fixture = TestBed.createComponent(HrmsPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
