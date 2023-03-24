import { Component } from '@angular/core';
import { SearchResultService } from './shared/services/search-result.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ts-app';

  constructor(private SearchResult: SearchResultService) {}

  isShowResults() {
    return this.SearchResult.isShow;
  }
}
