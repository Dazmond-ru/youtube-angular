import { Pipe, PipeTransform } from '@angular/core';
import { VideoItem } from '../../models/video-response.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: VideoItem[], filterValue?: string): VideoItem[] {
    return filterValue ? this.filter(items, filterValue) : items;
  }

  filter(items: VideoItem[], filterValue: string) {
    return items.filter(item => item.snippet.title.toLowerCase().includes(filterValue));
  }
}
