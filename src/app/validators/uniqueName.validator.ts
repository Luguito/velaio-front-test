import { AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

export function uniqueNameValidator(assignedTo: FormArray) {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value || !assignedTo) {
      return null;
    }

    const nameExists = assignedTo.controls.some(personControl => {
      return personControl.get('name')?.value === control.value;
    });

    return nameExists ? { nameAlreadyExists: true } : null;
  };
}