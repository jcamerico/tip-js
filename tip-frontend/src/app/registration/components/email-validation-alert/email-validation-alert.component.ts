import { Component, Input } from '@angular/core';
import { RegistrationService } from '../../registration.service';

@Component({
  selector: 'app-email-validation-alert',
  templateUrl: './email-validation-alert.component.html',
  styleUrls: ['./email-validation-alert.component.css']
})
export class EmailValidationAlertComponent {

  @Input()
  email = '';

  emailParams = {
    email: ''
  }
  
  emailResent = false;

  constructor(private registrationService: RegistrationService) {}

  resendEmail(): void {
    this.emailParams.email = this.email;
    this.registrationService.resendEmail(this.email).subscribe({
      next: () => this.emailResent = true
    });
  }

}
