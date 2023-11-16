import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailValidationAlertComponent } from './email-validation-alert.component';

describe('EmailValidationAlertComponent', () => {
  let component: EmailValidationAlertComponent;
  let fixture: ComponentFixture<EmailValidationAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailValidationAlertComponent]
    });
    fixture = TestBed.createComponent(EmailValidationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
