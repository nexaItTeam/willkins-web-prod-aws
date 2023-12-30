import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestFAQComponent } from './invest-faq.component';

describe('InvestFAQComponent', () => {
  let component: InvestFAQComponent;
  let fixture: ComponentFixture<InvestFAQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestFAQComponent]
    });
    fixture = TestBed.createComponent(InvestFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
