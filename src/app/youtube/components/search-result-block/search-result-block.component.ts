import { Component, OnDestroy, OnInit } from '@angular/core';

import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { ResultsService } from '../../services/results/results.service';

import { debounceTime, distinctUntilChanged, map, mergeMap, Subscription, switchMap } from 'rxjs';
import { VideoItem } from '../../models/video-response.model';

@Component({
  selector: 'app-search-result-block',
  templateUrl: './search-result-block.component.html',
  styleUrls: ['./search-result-block.component.scss'],
})
export class SearchResultBlockComponent implements OnInit, OnDestroy {
  items: VideoItem[] = [];
  subscription$!: Subscription;

  constructor(
    public filterService: FilterService,
    public sortService: SortService,
    public resultsService: ResultsService
  ) {}

  trackByFn(_index: number, item: VideoItem) {
    return item.id;
  }

  ngOnInit() {
    this.subscription$ = this.getVideo();
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  getVideo(): Subscription {
    return this.resultsService.searchValue
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        mergeMap(value => this.resultsService.getSearchResult(value)),
        map(items => this.resultsService.getVideoIdsFromSearch(items)),
        switchMap(id => this.resultsService.getVideoItems(id))
      )
      .subscribe(items => {
        this.items = items;
      });
  }
}
