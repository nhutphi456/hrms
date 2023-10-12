import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleBadgeComponent } from './role-badge.component';

describe('RoleBadgeComponent', () => {
  let component: RoleBadgeComponent;
  let fixture: ComponentFixture<RoleBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleBadgeComponent]
    });
    fixture = TestBed.createComponent(RoleBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
