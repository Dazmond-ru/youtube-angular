import { Component, ElementRef, ViewChild } from '@angular/core';
import { SortState, SortType } from 'src/app/models/sort.models';
import { FilterService } from 'src/app/shared/services/filter.service';
import { SortService } from 'src/app/shared/services/sort.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export class FilteringCriteriaBlockComponent {
  @ViewChild('date') date!: ElementRef;

  @ViewChild('views') views!: ElementRef;

  filterValue = '';

  sort: SortState = {};

  constructor(private filterService: FilterService, private sortService: SortService) {}

  setFilterValue() {
    this.filterService.value = this.filterValue.trim().toLowerCase();
  }

  setSortValue() {
    this.sortService.value = this.sort;
  }

  handleSortClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const span = target.querySelector('span') as HTMLSpanElement;
    const dataSort = target.getAttribute('data-sort') as SortType;

    const setSortFirstClick = () => {
      this.sort.type = dataSort;
      this.sort.order = 'asc';
    };

    if (!this.sort.type) {
      setSortFirstClick();
    } else if (this.sort.type !== dataSort) {
      if (dataSort === 'date') {
        this.views.nativeElement.innerHTML = '';
      } else {
        this.date.nativeElement.innerHTML = '';
      }
      setSortFirstClick();
    } else {
      this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc';
    }

    span.innerHTML = this.sort.order === 'asc' ? '↑' : '↓';

    this.setSortValue();
  }
}
