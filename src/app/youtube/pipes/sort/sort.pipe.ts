import { Pipe, PipeTransform } from '@angular/core';
import { SortOrder, SortState } from 'src/app/models/sort.models';
import { ResponseItem } from 'src/app/models/youtube-response.model';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: ResponseItem[], sortSettings?: SortState): ResponseItem[] {
    return sortSettings && Object.keys(sortSettings).length ? this.sort(items, sortSettings) : items;
  }

  sort(items: ResponseItem[], sortSettings: SortState) {
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
