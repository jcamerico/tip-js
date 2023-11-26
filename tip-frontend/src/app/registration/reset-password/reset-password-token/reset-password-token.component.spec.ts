import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordTokenComponent } from './reset-password-token.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { PasswordDisplayableComponent } from '../../components/password-displayable/password-displayable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ResetPasswordTokenComponent', () => {
  let component: ResetPasswordTokenComponent;
  let fixture: ComponentFixture<ResetPasswordTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordTokenComponent, PasswordDisplayableComponent],
      imports: [HttpClientTestingModule, TranslateModule.forRoot(), FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ResetPasswordTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
