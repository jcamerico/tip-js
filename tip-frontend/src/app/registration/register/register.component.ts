import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { RegistrationData } from '../registration.model';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { passwordValidator } from '../registration.utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  readonly EMAIL_VALIDATION_ERROR = 'ERROR.EMAIL-VALIDATION';  
  readonly EMAIL_ALREADY_REGISTERED_ERROR = 'ERROR.EMAIL-ALREADY-REGISTERED';
  readonly siteKey = environment.captchaKey;

  errorMessage = '';
  missingValidation = false;
  emailAlreadyUsed = false;
  emailResent = false;
  
  registration = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirmation: new FormControl('', Validators.required),
    legalAgreement: new FormControl(false, [Validators.required, Validators.requiredTrue]),
  }, [passwordValidator('password', 'passwordConfirmation')]);

  params = {
    mentionUrl: window.location.origin + '/privacy-policy'
  }

  showPassword = false;
  captchaResponse = '';

  constructor(private registrationService: RegistrationService) {
    window.captchaCallback = (captcha: string) => this.captchaResponse = captcha;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
    
  resetErrors(): void {
    this.errorMessage = '';
    this.emailAlreadyUsed = false;
    this.missingValidation = false;
  }
  
  onSubmit(): void {
    this.resetErrors();
    const registrationData = {
      firstName: this.registration.value.firstName || '',
      lastName: this.registration.value.lastName || '',
      email: this.registration.value.email || '',
      password: this.registration.value.password || '',
      captchaResponse: this.captchaResponse} as RegistrationData;
    this.registrationService.register(registrationData).subscribe({
      next: (data) => this.emailResent = true,
      error: (error) => {
        switch (error.error) {
          case this.EMAIL_VALIDATION_ERROR: 
            this.missingValidation = true;
            break;
          
          case this.EMAIL_ALREADY_REGISTERED_ERROR: 
            this.emailAlreadyUsed = true;
            break;
          
          default: 
            this.errorMessage = error.error;
        }
      }
    });
  }

}
