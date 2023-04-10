import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, debounceTime, distinctUntilChanged, mergeMap, switchMap } from 'rxjs';

import { SearchResponse, SearchItem } from '../../models/search-response.model';
import { VideoResponse, VideoItem } from '../../models/video-response.model';
import { URL_SEARCH, URL_VIDEOS } from '../../../../constants';

const searchUrlRequest = `${URL_SEARCH}?type=video&part=snippet&maxResults=15`;
const videosUrlRequest = `${URL_VIDEOS}?part=snippet,statistics`;

const delayBeforeRequest = 1000;

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private _isShowResults = false;

  public videosItems!: Observable<VideoItem[]>;

  public searchValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private httpClient: HttpClient) {}

  get isShowResults() {
    return this._isShowResults;
  }

  set isShowResults(isClickSearchButton) {
    this._isShowResults = isClickSearchButton;
  }

  getVideoById(id: string): Observable<VideoResponse> {
    const url = `${videosUrlRequest}&id=${id}`;
    return this.httpClient.get<VideoResponse>(url);
  }

  fetchSearchItems(query: string): Observable<SearchItem[]> {
    const url = `${searchUrlRequest}&q=${query}`;
    return this.httpClient.get<SearchResponse>(url).pipe(map(response => response.items));
  }

  getVideoIdsFromSearch(items: SearchItem[]): string {
    return items.map(i => i.id.videoId).join(',');
  }

  getVideoItems(id: string): Observable<VideoItem[]> {
    const url = `${videosUrlRequest}&id=${id}`;
    return this.httpClient.get<VideoResponse>(url).pipe(map(video => video.items));
  }

  getSearchResult() {
    return this.searchValue.pipe(
      debounceTime(delayBeforeRequest),
      distinctUntilChanged(),
      mergeMap(value => this.fetchSearchItems(value)),
      map(items => this.getVideoIdsFromSearch(items)),
      switchMap(id => this.getVideoItems(id))
    );
  }
}
