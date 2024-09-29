import { AbstractControl, FormArray, ValidationErrors } from '@angular/forms';

export function minLengthArrayValidator(control: AbstractControl): ValidationErrors | null {
  if (control instanceof FormArray && control.length < 1) {
    return { error: true };
  }

  return null; 
}