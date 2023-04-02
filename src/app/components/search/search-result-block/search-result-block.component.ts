import { Component, Input } from '@angular/core';
import { YoutubeResponse, ResponseItem } from '../../../models/youtube-response.model';
import { response } from '../../../data/response';
import { FilterService } from 'src/app/shared/services/filter.service';
import { SortService } from 'src/app/shared/services/sort.service';

@Component({
  selector: 'app-search-result-block',
  templateUrl: './search-result-block.component.html',
  styleUrls: ['./search-result-block.component.scss'],
})
export class SearchResultBlockComponent {
  response: YoutubeResponse;

  @Input() isShowResults = false;

  constructor(public filterService: FilterService, public sortService: SortService) {
    this.response = response;
  }

  trackByFn(index: number, item: ResponseItem) {
    return item.id;
  }
}
