import { Component, EventEmitter, Output } from '@angular/core';
import { FilterService } from '../../../youtube/services/filter/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchValue = '';

  showFilter = false;

  @Output() showResultsChange = new EventEmitter<boolean>();

  constructor(private filterService: FilterService) {}

  onClickSettings(): void {
    this.showFilter = !this.showFilter;
    this.filterService.filterValue = '';
  }

  isDisabled(value: string): boolean {
    return value.trim().length === 0;
  }

  onClickSearchButton(): void {
    this.showResultsChange.emit(true);
    this.searchValue = '';
  }
}
