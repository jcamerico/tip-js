import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordTokenComponent } from './reset-password-token.component';

describe('ResetPasswordTokenComponent', () => {
  let component: ResetPasswordTokenComponent;
  let fixture: ComponentFixture<ResetPasswordTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordTokenComponent]
    });
    fixture = TestBed.createComponent(ResetPasswordTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
