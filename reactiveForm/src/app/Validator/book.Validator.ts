import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function isbnValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (
      typeof value === 'string' &&
      value.length === 13 &&
      /^\d+$/.test(value)
    ) {
      return null;
    } else {
      return { invalidIsbn: 'Invalid ISBN-13 checksum' }; // Invalid checksum
    }
  };
}
