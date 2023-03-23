import { Component } from '@angular/core';
import { YoutubeResponse, ResponseItem } from '../../../models/youtube-response.model';
import { response } from '../../../data/response';

@Component({
  selector: 'app-search-result-block',
  templateUrl: './search-result-block.component.html',
  styleUrls: ['./search-result-block.component.scss'],
})
export class SearchItemsComponent {
  response: YoutubeResponse;

  constructor() {
    this.response = response;
  }

  trackByFn(index: number, item: ResponseItem) {
    return item.id;
  }
}
