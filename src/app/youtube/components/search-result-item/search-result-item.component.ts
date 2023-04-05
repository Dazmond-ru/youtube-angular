import { Component, Input } from '@angular/core';
import { ResponseItem } from '../../../models/youtube-response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent {
  @Input() item!: ResponseItem;

  constructor(private router: Router) {}

  openDetailedInformationPage(item: ResponseItem) {
    this.router.navigate(['/youtube', item.id]);
  }
}
