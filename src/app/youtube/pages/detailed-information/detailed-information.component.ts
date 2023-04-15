import { Component, OnDestroy, OnInit } from '@angular/core';

import { ResultsService } from '../../services/results/results.service';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';

import { VideoItem } from '../../models/video-response.model';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;
  id = '';
  item!: VideoItem;

  constructor(private activatedRoute: ActivatedRoute, private resultsService: ResultsService) {}

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.resultsService.getVideoById(this.id).subscribe(video => {
        this.item = <VideoItem>video.items[0];
      });
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
