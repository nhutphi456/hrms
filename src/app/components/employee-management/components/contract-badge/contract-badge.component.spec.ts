import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractBadgeComponent } from './contract-badge.component';

describe('ContractBadgeComponent', () => {
  let component: ContractBadgeComponent;
  let fixture: ComponentFixture<ContractBadgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContractBadgeComponent]
    });
    fixture = TestBed.createComponent(ContractBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
