import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoItem } from '../../../youtube/models/video-response.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  @Input() item!: VideoItem;

  statisticsClass?: string;

  dislikeCount = 777;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.statisticsClass = this.route.snapshot.data['class'];
  }
}
