import { Component, OnInit } from '@angular/core';
import { ResponseItem } from '../../../models/youtube-response.model';
import { ResultsService } from '../../services/results/results.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit {
  id = '';
  item!: ResponseItem;

  constructor(private activatedRoute: ActivatedRoute, private resultsService: ResultsService) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.item = this.resultsService.getItemById(this.id)!;
  }
}
