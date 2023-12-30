import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestProcessComponent } from './invest-process.component';

describe('InvestProcessComponent', () => {
  let component: InvestProcessComponent;
  let fixture: ComponentFixture<InvestProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestProcessComponent]
    });
    fixture = TestBed.createComponent(InvestProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
