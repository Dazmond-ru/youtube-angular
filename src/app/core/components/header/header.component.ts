import { Component, EventEmitter, Output } from '@angular/core';
import { FilterService } from '../../../youtube/services/filter/filter.service';
import { Router } from '@angular/router';
import { ResultsService } from '../../../youtube/services/results/results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchValue = '';

  showFilter = false;

  @Output() showResultsChange = new EventEmitter<boolean>();

  constructor(private filterService: FilterService, private resultsService: ResultsService, private router: Router) {}

  onClickSettings(): void {
    this.showFilter = !this.showFilter;
    this.filterService.filterValue = '';
  }

  isDisabled(value: string): boolean {
    return value.trim().length === 0;
  }

  onClickSearchButton(): void {
    this.resultsService.isShow = true;
    this.searchValue = '';
    this.router.navigate(['/']);
  }
}
