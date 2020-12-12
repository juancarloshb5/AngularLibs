import { AbstractControl } from '@angular/forms';
import { Password6CharAlphanumericPatternToString, PhonePatternToString } from './RegExp.models';

export class ValidationErrorsMessages {

  public static ShowValidationMessageIfDirty(control: AbstractControl): boolean {
    return control.errors && control.dirty  ? true : false;

  }

  public static ShowValidationMessageIfErrors(control: AbstractControl): boolean {
    return control.errors  ? true : false;
  }


  public static ValidationErrorsMessage(control: AbstractControl): string {
    return control.hasError('required') ? 'Campo requerido'
      : control.hasError('email') ? 'Formato de correo electrónico inválido'
      : control.hasError('minlength') ? this.MinLengthMessage(control.errors.minlength)
      : control.hasError('pattern')   ? this.PatternMessage(control.errors.pattern.requiredPattern)
      : control.hasError('passwordMismatch')   ? 'Las contraseñas no coinciden'
      : '';
    }
  private static MinLengthMessage(value: {
    actualLength: number;
    requiredLength: number;
  }): string {
    return `Debe contener al menos ${value.requiredLength} caracteres`;
  }

  private static PatternMessage(pattern: string): string {
    return pattern ===  Password6CharAlphanumericPatternToString ? 'Debe contener mínimo 6 caracteres que incluyan letras y números'
          : pattern === PhonePatternToString ? 'Formato inválido. Ejs: 809-555-5555 o (809) 555-5555'
          : 'No se ajusta con el patrón';
  }
}
