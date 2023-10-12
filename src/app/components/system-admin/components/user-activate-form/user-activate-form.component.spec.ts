import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivateFormComponent } from './user-activate-form.component';

describe('UserActivateFormComponent', () => {
  let component: UserActivateFormComponent;
  let fixture: ComponentFixture<UserActivateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserActivateFormComponent]
    });
    fixture = TestBed.createComponent(UserActivateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
