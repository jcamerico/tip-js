import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegistrationService } from 'src/app/registration/registration.service';

@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.css']
})
export class ResetEmailComponent {

  readonly EMAIL_UNKNOWN = "ERROR.EMAIL-UNKNOWN";

  emailSent = false;
  emailUnknown = false;
  errorMessage = '';

  token = '';
  tokenValid = true;

  emailParams = {
    email: ''
  }

  pwdReset = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private registrationService: RegistrationService) {}

  resetErrors(): void {
    this.emailSent = false;
    this.emailUnknown = false;
    this.errorMessage = '';
  }

  onSubmit(): void {
    this.resetErrors();
    const email = this.pwdReset.value.email || '';
    this.emailParams.email = email;
    this.registrationService.resetPasswordToken(email).subscribe({
      next: () => this.emailSent = true,
      error: (error) => {
        switch (error.error) {
          case this.EMAIL_UNKNOWN:
            this.emailUnknown = true;
            break;
          default:  
            this.errorMessage = error.error
        }
      }
    });
  }
  
}
