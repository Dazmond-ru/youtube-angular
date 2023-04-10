import { Component, OnDestroy, OnInit } from '@angular/core';

import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { ResultsService } from '../../services/results/results.service';

import { Subscription } from 'rxjs';
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
    this.subscription$ = this.resultsService.getSearchResult().subscribe(items => {
      this.items = items;
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
