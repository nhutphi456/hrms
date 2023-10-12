import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterUserFormComponent } from './updater-user-form.component';

describe('UpdaterUserFormComponent', () => {
  let component: UpdaterUserFormComponent;
  let fixture: ComponentFixture<UpdaterUserFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdaterUserFormComponent]
    });
    fixture = TestBed.createComponent(UpdaterUserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
