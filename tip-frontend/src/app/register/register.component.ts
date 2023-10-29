import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registration = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl('', Validators.required),
    legalAgreement: new FormControl(false, Validators.required),
  });

  params = {
    mentionUrl: window.location.origin + '/privacy-policy'
  }

  showPassword = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
    
  
  onSubmit(): void {

  }

}
