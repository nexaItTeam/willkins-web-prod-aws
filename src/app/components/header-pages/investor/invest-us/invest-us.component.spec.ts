import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestUsComponent } from './invest-us.component';

describe('InvestUsComponent', () => {
  let component: InvestUsComponent;
  let fixture: ComponentFixture<InvestUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestUsComponent]
    });
    fixture = TestBed.createComponent(InvestUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
