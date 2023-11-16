import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

  
export const authGuard: CanActivateFn = (route, state) => {
  const authenticated = inject(AuthService).isAuthenticated();
  if (!authenticated) {
    inject(Router).navigate(['/login']);
  }
  return authenticated;
};

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  if (!authService.isAuthenticated()) {
    inject(Router).navigate(['/login']);
  }
  if (!authService.isAdmin()) {
    inject(Router).navigate(['/dashboard']);
  }
  return authService.isAuthenticated() && authService.isAdmin();
};
