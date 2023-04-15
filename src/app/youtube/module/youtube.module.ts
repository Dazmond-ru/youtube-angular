import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../pages/main/main.component';
import { DetailedInformationComponent } from '../pages/detailed-information/detailed-information.component';
import { FilterPipe } from '../pipes/filter/filter.pipe';
import { SortPipe } from '../pipes/sort/sort.pipe';
import { BottomColorDirective } from '../../core/directives/bottom-color/bottom-color.directive';
import { SearchResultItemComponent } from '../components/search-result-item/search-result-item.component';
import { SearchResultBlockComponent } from '../components/search-result-block/search-result-block.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { MaterialModule } from '../../material/material.module';
import { StatisticsComponent } from '../../core/components/statistics/statistics.component';

@NgModule({
  declarations: [
    MainComponent,
    SearchResultItemComponent,
    SearchResultBlockComponent,
    BottomColorDirective,
    FilterPipe,
    SortPipe,
    DetailedInformationComponent,
    StatisticsComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule, MaterialModule],
})
export class YoutubeModule {}
