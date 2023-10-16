import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSkillsComponent } from './top-skills.component';

describe('TopSkillsComponent', () => {
  let component: TopSkillsComponent;
  let fixture: ComponentFixture<TopSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopSkillsComponent]
    });
    fixture = TestBed.createComponent(TopSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
