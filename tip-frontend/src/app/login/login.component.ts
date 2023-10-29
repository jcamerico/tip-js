import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  readonly MIN_PASSWORD_LENGTH = 6;
  loginError = false;

  constructor(private authService: AuthService) {}
  
  readonly year = environment.year;
  credentials = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.MIN_PASSWORD_LENGTH)])
  });

  onSubmit(): void {
    this.authService.login(this.credentials.value.username || '', this.credentials.value.password || '').subscribe({
      next: (loginSuccessful) => {
        if (loginSuccessful) {
          // TODO route to dashboard
        } else {
          this.loginError = true;
        }
      }
    });
  }    

}
