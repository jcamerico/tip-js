import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../shared/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  

  readonly EMAIL_VALIDATION_ERROR = 'ERROR.EMAIL-VALIDATION';
  readonly ACCOUNT_LOCKED_ERROR = 'ERROR.ACCOUNT-LOCK';
  

  inscriptionsClosed = environment.status.inscriptionsClosed;
  emailNotValidated = false;
  accountLocked = false;
  loginError = false;

  constructor(private authService: AuthService, private router: Router) {}
  
  readonly year = environment.year;
  credentials = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  private resetError(): void {
    this.emailNotValidated = false;
    this.accountLocked = false;
    this.loginError = false;
  }

  onSubmit(): void {
    this.resetError();
    this.authService.login(this.credentials.value.username || '', this.credentials.value.password || '').subscribe({
      next: () => {
        if (this.authService.isAdmin()) {
          this.router.navigateByUrl('/admin');
        } else {
          this.router.navigateByUrl('/dashboard');
        }
      },
      error: (error) => {
        switch (error.error) {
          case this.EMAIL_VALIDATION_ERROR:
            this.emailNotValidated = true;
            break;
          case this.ACCOUNT_LOCKED_ERROR:
            this.accountLocked = true;
            break;
          default:
            console.log(error);
            this.loginError = true;
        }
      }
    });
  }    

}
