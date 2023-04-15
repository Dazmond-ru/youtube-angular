import { Pipe, PipeTransform } from '@angular/core';
import { SortOrder, SortState } from '../../models/sort.models';
import { VideoItem } from '../../models/video-response.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: VideoItem[], sortSettings?: SortState): VideoItem[] {
    return sortSettings && Object.keys(sortSettings).length ? this.sort(items, sortSettings) : items;
  }

  sort(items: VideoItem[], sortSettings: SortState) {
    return items.sort((a, b) => {
      if (sortSettings && sortSettings.type && sortSettings.order) {
        const [firstValue, secondValue] =
          sortSettings.type === 'date'
            ? [new Date(a.snippet.publishedAt).getTime(), new Date(b.snippet.publishedAt).getTime()]
            : [Number(a.statistics.viewCount), Number(b.statistics.viewCount)];
        return sortSettings.order === SortOrder.asc ? firstValue - secondValue : secondValue - firstValue;
      }
      return 0;
    });
  }
}
