import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { SearchResponse, SearchItem } from '../../models/search-response.model';
import { VideoResponse, VideoItem } from '../../models/video-response.model';
import { API_KEY, URL_SEARCH, URL_VIDEOS } from '../../../../constants';

const searchUrlResponse = `${URL_SEARCH}?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=`;
const videosUrlResponse = `${URL_VIDEOS}?key=${API_KEY}&part=snippet,statistics&id=`;

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  private _isShowResults = false;

  public videosItems!: Observable<VideoItem[]>;

  public searchValue: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  get isShowResults() {
    return this._isShowResults;
  }

  set isShowResults(isClickSearchButton) {
    this._isShowResults = isClickSearchButton;
  }

  getVideoById(id: string): Observable<VideoResponse> {
    const url = videosUrlResponse + id;
    return this.http.get<VideoResponse>(url);
  }

  getSearchResult(query: string): Observable<SearchItem[]> {
    const url = searchUrlResponse + query;
    return this.http.get<SearchResponse>(url).pipe(map(response => response.items));
  }

  getVideoIdsFromSearch(items: SearchItem[]): string {
    return items.map(i => i.id.videoId).join(',');
  }

  getVideoItems(id: string): Observable<VideoItem[]> {
    const url = videosUrlResponse + id;
    return this.http.get<VideoResponse>(url).pipe(map(video => video.items));
  }
}
