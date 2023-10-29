import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = false;
  private loggedInEmitter = new BehaviorSubject<boolean>(this.loggedIn);
  
  logged$ = this.loggedInEmitter.asObservable();
  

  login(username: string, password: string): Observable<boolean> {
    // TODO
    this.loggedIn = false;
    this.loggedInEmitter.next(true);
    return of(this.loggedIn);
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedInEmitter.next(false);
  }

  
}
