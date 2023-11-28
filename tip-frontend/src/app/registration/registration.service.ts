import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegistrationData } from './registration.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  register(registrationData: RegistrationData): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/users/register', registrationData, httpOptions);
  }

  resendEmail(email: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/users/validation-email', {'email': email}, httpOptions);
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/users/reset-password', {'token': token, 'password': password}, httpOptions);
  }

  resetPasswordToken(email: string = ''): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/users/reset-password-token', {'email': email}, httpOptions);
  }

  validateResetToken(token: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/users/reset-token-validation', {'token': token}, httpOptions);
  }

  validateEmail(key: string, email: string): Observable<any> {;
    return this.httpClient.post(environment.apiUrl + '/api/users/email-validation', {'key': key, 'email': email}, httpOptions);
  }


}
