import { Component } from '@angular/core';
import { FilterService } from 'src/app/shared/services/filter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchValue = '';

  showFilter = false;

  constructor(private filterService: FilterService) {}

  onClickSettings(): void {
    this.showFilter = !this.showFilter;
    this.filterService.value = '';
  }
}
