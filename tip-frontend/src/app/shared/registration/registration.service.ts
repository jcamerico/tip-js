import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

}
