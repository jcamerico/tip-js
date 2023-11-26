import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailValidationAlertComponent } from './email-validation-alert.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('EmailValidationAlertComponent', () => {
  let component: EmailValidationAlertComponent;
  let fixture: ComponentFixture<EmailValidationAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailValidationAlertComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(EmailValidationAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
