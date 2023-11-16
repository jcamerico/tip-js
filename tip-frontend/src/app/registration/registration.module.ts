import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PasswordDisplayableComponent } from "./components/password-displayable/password-displayable.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { EmailValidationAlertComponent } from "./components/email-validation-alert/email-validation-alert.component";
import { RegistrationService } from "./registration.service";
import { LoginComponent } from "./login/login.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { RegisterComponent } from "./register/register.component";
import { EmailVerificationComponent } from "./email-verification/email-verification.component";
import { ResetEmailComponent } from "./reset-password/reset-email/reset-email.component";
import { ResetPasswordTokenComponent } from "./reset-password/reset-password-token/reset-password-token.component";
import { RouterModule } from "@angular/router";
import { EmailSentComponent } from './components/email-sent/email-sent.component';

@NgModule({
    imports:      [ CommonModule, ReactiveFormsModule, FormsModule, TranslateModule, RouterModule ],
    providers:    [ RegistrationService ],
    declarations: [ PasswordDisplayableComponent, EmailValidationAlertComponent, LoginComponent, ResetPasswordComponent, RegisterComponent, EmailVerificationComponent, ResetEmailComponent, ResetPasswordTokenComponent, EmailSentComponent ],
    exports:      [ LoginComponent, ResetPasswordComponent, RegisterComponent, EmailVerificationComponent ],
   })
   export class RegistrationModule { }