import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private filterValue = '';

  get value() {
    return this.filterValue;
  }

  set value(value: string) {
    if (value !== this.filterValue) {
      this.filterValue = value;
    }
  }
}
