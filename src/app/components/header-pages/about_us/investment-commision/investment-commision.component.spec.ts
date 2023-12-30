import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCommisionComponent } from './investment-commision.component';

describe('InvestmentCommisionComponent', () => {
  let component: InvestmentCommisionComponent;
  let fixture: ComponentFixture<InvestmentCommisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentCommisionComponent]
    });
    fixture = TestBed.createComponent(InvestmentCommisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
