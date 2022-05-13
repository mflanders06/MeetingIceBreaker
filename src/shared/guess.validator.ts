import { AbstractControl } from '@angular/forms';

export function ValidateGuess(control: AbstractControl) {
  return control.value.length > 1 ? true : null
}