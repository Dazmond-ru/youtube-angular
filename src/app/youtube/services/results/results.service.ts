import { Injectable } from '@angular/core';
import { response } from '../../../data/response';
import { ResponseItem } from '../../../models/youtube-response.model';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private _isShowResults = false;
  private _response = response;

  get isShowResults() {
    return this._isShowResults;
  }

  set isShowResults(isClickSearchButton) {
    this._isShowResults = isClickSearchButton;
  }

  get allResults() {
    return this._response;
  }

  getItemById(id: string): ResponseItem | undefined {
    return response.items.find(item => item.id === id);
  }
}
