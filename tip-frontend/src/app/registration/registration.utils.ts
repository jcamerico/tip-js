import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator(passwordField: string, passwordConfirmatonField: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const pwd1 = group.get(passwordField);
      const pwd2 = group.get(passwordConfirmatonField);
      return (pwd1?.value !== pwd2?.value) ? {passwordsDoNotMatch: true} : null;
    }
  }