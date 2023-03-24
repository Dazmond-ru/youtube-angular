import { Injectable } from '@angular/core';
import { SortState } from 'src/app/models/sort.models';

@Injectable({
  providedIn: 'root',
})
export class SortService {
  private sortValue: SortState = {};

  get value() {
    return this.sortValue;
  }

  set value(value: SortState) {
    this.sortValue = { ...value };
  }
}
