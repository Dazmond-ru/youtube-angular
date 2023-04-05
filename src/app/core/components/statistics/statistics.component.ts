import { Component, Input, OnInit } from '@angular/core';
import { ResponseItem } from '../../../models/youtube-response.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  @Input() item!: ResponseItem;

  statisticsClass?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.statisticsClass = this.route.snapshot.data['class'];
  }
}
