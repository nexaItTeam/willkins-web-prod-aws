import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvetDialogComponent } from './advet-dialog.component';

describe('AdvetDialogComponent', () => {
  let component: AdvetDialogComponent;
  let fixture: ComponentFixture<AdvetDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvetDialogComponent]
    });
    fixture = TestBed.createComponent(AdvetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
