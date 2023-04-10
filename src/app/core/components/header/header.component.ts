import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterService } from '../../../youtube/services/filter/filter.service';
import { Router } from '@angular/router';
import { ResultsService } from '../../../youtube/services/results/results.service';
import { LoginService } from '../../../auth/services/login/login.service';

const minLengthRequest = 3;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  searchValue = '';

  showFilter = false;

  isLoggedIn = false;

  constructor(
    private filterService: FilterService,
    private resultsService: ResultsService,
    private router: Router,
    private loginService: LoginService
  ) {}

  toggleSettingsVisibility(): void {
    this.showFilter = !this.showFilter;
    this.filterService.filterValue = '';
  }

  onChange(event: KeyboardEvent) {
    const { value } = event.target as HTMLInputElement;
    const { length } = value.trim();
    if (length >= minLengthRequest) {
      this.resultsService.isShowResults = true;
      this.router.navigate(['/youtube']);
      this.resultsService.searchValue.next(value);
    }
  }

  ngOnInit() {
    this.loginService.isLogin$.subscribe(isLogin => {
      this.isLoggedIn = isLogin;
    });
  }

  ngOnDestroy() {
    this.loginService.isLogin$.unsubscribe();
  }

  toggleAuth(): void {
    if (this.isLoggedIn) {
      this.loginService.logout();
    }
  }

  buttonText(): string {
    return this.isLoggedIn ? 'Logout' : 'Login';
  }
}
