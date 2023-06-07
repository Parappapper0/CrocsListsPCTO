import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewPageComponent } from './list-view-page.component';

describe('ListViewPageComponent', () => {
  let component: ListViewPageComponent;
  let fixture: ComponentFixture<ListViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListViewPageComponent]
    });
    fixture = TestBed.createComponent(ListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
