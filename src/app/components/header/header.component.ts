import { Component } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';
import { SearchResultService } from 'src/app/shared/services/search-result.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchValue = '';

  showFilter = false;

  constructor(private filterService: FilterService, private searchResults: SearchResultService) {}

  onClickSettings(): void {
    this.showFilter = !this.showFilter;
    this.filterService.value = '';
  }

  isDisabled(value: string): boolean {
    return value.trim().length === 0;
  }

  onClickSearchButton(): void {
    this.searchResults.isShow = true;
    this.searchValue = '';
  }
}
