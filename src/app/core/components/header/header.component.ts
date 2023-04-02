import { Component, EventEmitter, Output } from '@angular/core';
import { FilterService } from '../../../youtube/services/filter/filter.service';
import { Router } from '@angular/router';
import { ResultsService } from '../../../youtube/services/results/results.service';
import { LoginService } from '../../../auth/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchValue = '';

  showFilter = false;

  isLoggedIn = false;

  @Output() showResultsChange = new EventEmitter<boolean>();

  constructor(
    private filterService: FilterService,
    private resultsService: ResultsService,
    private router: Router,
    private loginService: LoginService
  ) {}

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
    this.router.navigate(['/youtube']);
  }

  onClickLogout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  isAuth(): boolean {
    return this.loginService.isAuth();
  }
}
