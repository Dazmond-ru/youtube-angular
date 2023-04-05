import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '../../../models/youtube-response.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: ResponseItem[], filterValue?: string): ResponseItem[] {
    return filterValue ? this.filter(items, filterValue) : items;
  }

  filter(items: ResponseItem[], filterValue: string) {
    return items.filter(item => item.snippet.title.toLowerCase().includes(filterValue));
  }
}
