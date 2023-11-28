import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/registration/registration.service';
import { passwordValidator } from 'src/app/registration/registration.utils';

@Component({
  selector: 'app-reset-password-token',
  templateUrl: './reset-password-token.component.html',
  styleUrls: ['./reset-password-token.component.css']
})
export class ResetPasswordTokenComponent implements OnInit {

  @Input()
  token = '';

  invalidToken = false;
  passwordReset = false;
  vianney = false;

  pwdReset = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirmation: new FormControl('', Validators.required),
  }, [passwordValidator('password', 'passwordConfirmation')]);

  constructor(private registrationService: RegistrationService) {}

  ngOnInit(): void {
    this.registrationService.validateResetToken(this.token).subscribe({
      next: () => this.invalidToken = false,
      error: () => this.invalidToken = true
    });
  }

  onSubmit() {
    this.registrationService.resetPassword(this.token, this.pwdReset.value.password || '').subscribe({
      next: () => this.passwordReset = true
    });
  }

}
