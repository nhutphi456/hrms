import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTablePopupComponent } from './top-table-popup.component';

describe('TopTablePopupComponent', () => {
  let component: TopTablePopupComponent;
  let fixture: ComponentFixture<TopTablePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopTablePopupComponent]
    });
    fixture = TestBed.createComponent(TopTablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
