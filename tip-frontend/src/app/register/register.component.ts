import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RegistrationService } from '../shared/registration/registration.service';
import { RegistrationData } from '../shared/registration/registration.model';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';

export function passwordValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const pwd1 = group.get('password');
    const pwd2 = group.get('passwordConfirmation');
    return (pwd1?.value !== pwd2?.value) ? {passwordsDoNotMatch: true} : null;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  readonly siteKey = environment.captchaKey;

  registration = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    passwordConfirmation: new FormControl('', Validators.required),
    legalAgreement: new FormControl(false, [Validators.required, Validators.requiredTrue]),
  }, [passwordValidator()]);

  params = {
    mentionUrl: window.location.origin + '/privacy-policy'
  }

  showPassword = false;
  captchaResponse = '';

  constructor(private registrationService: RegistrationService, private translateService: TranslateService) {
    window.captchaCallback = (captcha: string) => this.captchaResponse = captcha;
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
    
  
  onSubmit(): void {
    const registrationData = {
      firstName: this.registration.value.firstName || '',
      lastName: this.registration.value.lastName || '',
      email: this.registration.value.email || '',
      password: this.registration.value.password || '',
      captchaResponse: this.captchaResponse,
      language: this.translateService.currentLang} as RegistrationData;
    this.registrationService.register(registrationData).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error)
    });
  }

}
