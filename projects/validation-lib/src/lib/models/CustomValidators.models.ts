import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';


export class CustomValidators {
  public static passwordConfirmationMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const form = control.parent;
    // console.log(form);
    if (form !== undefined) {
      if (form.get('password').value === control.value) {
        return null;
      }
      else { return { passwordMismatch: true }; }
    }
    return null;
  }

  public static passwordMatchValidator: ValidatorFn
   =  ( formGroup: FormGroup): ValidationErrors | null => {
    if (formGroup.get('password').value === formGroup.get('passwordConfirmation').value) {
      return null;
    }
    else { return { passwordMismatch: true }; }
  }
}
