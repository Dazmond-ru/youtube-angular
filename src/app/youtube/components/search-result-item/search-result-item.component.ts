import { Component, Input } from '@angular/core';
import { ResponseItem } from '../../../models/youtube-response.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent {
  @Input() item!: ResponseItem;
}
