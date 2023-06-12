import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInRegisterComponent } from './log-in-register.component';

describe('LogInRegisterComponent', () => {
  let component: LogInRegisterComponent;
  let fixture: ComponentFixture<LogInRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogInRegisterComponent]
    });
    fixture = TestBed.createComponent(LogInRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
