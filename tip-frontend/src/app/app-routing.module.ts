import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './registration/login/login.component';
import { AppComponent } from './app.component';
import { adminGuard, authGuard } from './shared/auth/auth.guard';
import { RegisterComponent } from './registration/register/register.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ResetPasswordComponent } from './registration/reset-password/reset-password.component';
import { EmailVerificationComponent } from './registration/email-verification/email-verification.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';


// TODO Lazy loading
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'TIP ' + environment.year,
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'TIP ' + environment.year,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'TIP ' + environment.year
  },
  {
    path: 'reset-pwd',
    component: ResetPasswordComponent,
    title: 'TIP ' + environment.year,
  },
  {
    path: 'email-verification',
    component: EmailVerificationComponent,
    title: 'TIP ' + environment.year,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Registration | TIP ' + environment.year,
    canActivate: [authGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    title: 'Registration | TIP ' + environment.year,
    canActivate: [adminGuard]
  },
  {
    path: '**',
    component: DashboardComponent,
    title: 'Registration | TIP ' + environment.year,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
