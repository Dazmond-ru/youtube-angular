import { ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidation(): ValidatorFn {
  return (control): ValidationErrors | null => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const userDate = new Date(control.value);
    const userDay = userDate.getDate();
    const userMonth = userDate.getMonth() + 1;

    if (userMonth < currentMonth) {
      return null;
    }

    if (userMonth === currentMonth) {
      if (userDay <= currentDay) {
        return null;
      }
    }

    return { isFuture: true };
  };
}
