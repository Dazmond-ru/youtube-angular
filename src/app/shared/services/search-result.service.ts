import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchResultService {
  private isShowSearchResults = false;

  get isShow() {
    return this.isShowSearchResults;
  }

  set isShow(isClickSearchButton) {
    this.isShowSearchResults = isClickSearchButton;
  }
}
