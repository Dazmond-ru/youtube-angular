import { Injectable } from '@angular/core';
import { SortOrder, SortState, SortType } from '../../../models/sort.models';

type SortItem = { text: string; order: SortOrder; type: SortType };
@Injectable({
  providedIn: 'root',
})
export class SortService {
  private _sortValue: SortState = {
    order: SortOrder.none,
    type: SortType.none,
  };

  get sortValue() {
    return this._sortValue;
  }

  private _sortData: SortItem[] = [
    { text: 'date', type: SortType.date, order: SortOrder.none },
    { text: 'count of views', type: SortType.views, order: SortOrder.none },
  ];

  get sortData() {
    return this._sortData.map(sortItem => {
      if (sortItem.type === this._sortValue.type) {
        switch (sortItem.order) {
          case SortOrder.none:
            return { ...sortItem, order: SortOrder.asc };
          case SortOrder.asc:
            return { ...sortItem, order: SortOrder.desc };
          case SortOrder.desc:
            return { ...sortItem, order: SortOrder.asc };
        }
      } else {
        return { ...sortItem, order: SortOrder.none };
      }
    });
  }

  handleSort(sortType: SortType) {
    for (const sortItem of this._sortData) {
      if (sortItem.type === sortType) {
        switch (sortItem.order) {
          case SortOrder.none:
            sortItem.order = SortOrder.desc;
            break;
          case SortOrder.asc:
            sortItem.order = SortOrder.desc;
            break;
          case SortOrder.desc:
            sortItem.order = SortOrder.asc;
            break;
        }
        this._sortValue = { type: sortType, order: sortItem.order };
      } else {
        sortItem.order = SortOrder.none;
      }
    }
  }
}
