import { Component, Input } from '@angular/core';
import { YoutubeResponse, ResponseItem } from '../../../models/youtube-response.model';
import { FilterService } from '../../services/filter/filter.service';
import { SortService } from '../../services/sort/sort.service';
import { ResultsService } from '../../services/results/results.service';

@Component({
  selector: 'app-search-result-block',
  templateUrl: './search-result-block.component.html',
  styleUrls: ['./search-result-block.component.scss'],
})
export class SearchResultBlockComponent {
  response: YoutubeResponse;

  @Input() isShowResults = false;

  constructor(
    public filterService: FilterService,
    public sortService: SortService,
    public resultsService: ResultsService
  ) {
    this.response = resultsService.allResults;
  }

  trackByFn(_index: number, item: ResponseItem) {
    return item.id;
  }
}
