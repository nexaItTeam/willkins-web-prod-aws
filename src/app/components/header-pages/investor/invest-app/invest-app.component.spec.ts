import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestAppComponent } from './invest-app.component';

describe('InvestAppComponent', () => {
  let component: InvestAppComponent;
  let fixture: ComponentFixture<InvestAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestAppComponent]
    });
    fixture = TestBed.createComponent(InvestAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
