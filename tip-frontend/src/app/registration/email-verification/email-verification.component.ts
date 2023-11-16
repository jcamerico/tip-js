import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  validToken = false;
  emailResent = false;
  emailParams = {
    email: ''
  };
  

  constructor(private route: ActivatedRoute, private registrationService: RegistrationService) {}

  ngOnInit(): void {
    const key = this.route.snapshot.queryParamMap.get('x') || '';
    this.emailParams.email = this.route.snapshot.queryParamMap.get('e') || '';
    if (key && this.emailParams.email) {
      this.registrationService.validateEmail(key, this.emailParams.email).subscribe({
        next: () => this.validToken = true,
      });
    }
  }

  resendValidationEmail(): void {
    this.registrationService.resendEmail(this.emailParams.email).subscribe({
      next: () => this.emailResent = true
    });
  }
}
