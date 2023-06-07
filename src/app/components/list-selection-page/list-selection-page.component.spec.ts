import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelectionPageComponent } from './list-selection-page.component';

describe('ListSelectionPageComponent', () => {
  let component: ListSelectionPageComponent;
  let fixture: ComponentFixture<ListSelectionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSelectionPageComponent]
    });
    fixture = TestBed.createComponent(ListSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
