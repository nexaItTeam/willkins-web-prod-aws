import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestPortalComponent } from './invest-portal.component';

describe('InvestPortalComponent', () => {
  let component: InvestPortalComponent;
  let fixture: ComponentFixture<InvestPortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestPortalComponent]
    });
    fixture = TestBed.createComponent(InvestPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
