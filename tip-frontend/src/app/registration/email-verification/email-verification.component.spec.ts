import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailVerificationComponent } from './email-verification.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';

describe('EmailVerificationComponent', () => {
  let component: EmailVerificationComponent;
  let fixture: ComponentFixture<EmailVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailVerificationComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, TranslateModule.forRoot()]
    });
    fixture = TestBed.createComponent(EmailVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
