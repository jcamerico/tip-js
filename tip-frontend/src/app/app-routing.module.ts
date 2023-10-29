import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { authGuard } from './shared/auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'TIP ' + environment.year
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'TIP ' + environment.year
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'TIP ' + environment.year
  },
  {
    path: '',
    component: AppComponent,
    title: 'Registration | TIP ' + environment.year,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
