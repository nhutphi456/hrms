import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsAvatarComponent } from './hrms-avatar.component';

describe('HrmsAvatarComponent', () => {
  let component: HrmsAvatarComponent;
  let fixture: ComponentFixture<HrmsAvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrmsAvatarComponent]
    });
    fixture = TestBed.createComponent(HrmsAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
