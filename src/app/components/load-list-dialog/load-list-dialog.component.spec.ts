import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadListDialogComponent } from './load-list-dialog.component';

describe('LoadListDialogComponent', () => {
  let component: LoadListDialogComponent;
  let fixture: ComponentFixture<LoadListDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadListDialogComponent]
    });
    fixture = TestBed.createComponent(LoadListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
