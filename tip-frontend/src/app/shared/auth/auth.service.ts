import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../storage/local-storage.service';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};

const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInEmitter = new BehaviorSubject<boolean>(false);
  private jwtHelper: JwtHelperService;

  token!: any;
  
  logged$ = this.loggedInEmitter.asObservable();
  
  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) {
    this.jwtHelper = new JwtHelperService();
    const storedToken = this.localStorageService.get(TOKEN_KEY);
    this.token = storedToken;
    if (this.token) {
      this.loggedInEmitter.next(true);
    }
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/login', {'username': username, 'password': password}, httpOptions).pipe(
      tap((response: any) => {
        this.token = response.accessToken;
        this.localStorageService.set(TOKEN_KEY, this.token);
        this.loggedInEmitter.next(true);
      })
    );
  }

  isAuthenticated(): boolean {
    return this.loggedInEmitter.getValue();
  }

  logout(): void {
    this.loggedInEmitter.next(false);
    this.localStorageService.remove(TOKEN_KEY);
    this.token = '';
  }

  isAdmin(): boolean {
    const decodedToken = this.jwtHelper.decodeToken(this.token);
    return decodedToken['admin'] as boolean;
  }

  getEmail(): string {
    const decodedToken = this.jwtHelper.decodeToken(this.token);
    return decodedToken['email'] as string;
  }



  
}
