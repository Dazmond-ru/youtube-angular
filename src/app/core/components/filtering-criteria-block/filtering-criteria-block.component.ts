import { Component } from '@angular/core';
import { FilterService } from '../../../youtube/services/filter/filter.service';
import { SortService } from '../../../youtube/services/sort/sort.service';

@Component({
  selector: 'app-filtering-criteria-block',
  templateUrl: './filtering-criteria-block.component.html',
  styleUrls: ['./filtering-criteria-block.component.scss'],
})
export class FilteringCriteriaBlockComponent {
  constructor(public filterService: FilterService, public sortService: SortService) {}
}
