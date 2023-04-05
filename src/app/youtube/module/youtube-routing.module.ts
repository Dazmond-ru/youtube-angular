import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../pages/main/main.component';
import { DetailedInformationComponent } from '../pages/detailed-information/detailed-information.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { class: 'statistics-main' },
  },
  {
    path: ':id',
    component: DetailedInformationComponent,
    data: { class: 'statistics-info' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
