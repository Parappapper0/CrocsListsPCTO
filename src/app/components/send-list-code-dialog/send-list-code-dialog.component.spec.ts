import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendListCodeDialogComponent } from './send-list-code-dialog.component';

describe('LoadListDialogComponent', () => {
  let component: SendListCodeDialogComponent;
  let fixture: ComponentFixture<SendListCodeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendListCodeDialogComponent]
    });
    fixture = TestBed.createComponent(SendListCodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
