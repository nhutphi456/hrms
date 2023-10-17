import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTagComponent } from './job-tag.component';

describe('JobTagComponent', () => {
  let component: JobTagComponent;
  let fixture: ComponentFixture<JobTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobTagComponent]
    });
    fixture = TestBed.createComponent(JobTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
