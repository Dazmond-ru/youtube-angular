import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  private _filterValue = '';

  get filterValue() {
    return this._filterValue;
  }

  set filterValue(value: string) {
    if (value !== this._filterValue) {
      this._filterValue = value;
    }
  }
}
