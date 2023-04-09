import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoItem } from '../../models/video-response.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent {
  @Input() item!: VideoItem;

  constructor(private router: Router) {}

  openDetailedInformationPage(item: VideoItem) {
    this.router.navigate(['/youtube', item.id]);
  }
}
