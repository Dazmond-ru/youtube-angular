import { Thumbnails } from './thumbnails.model';
import { Statistics } from './statistics.models';

export interface VideoResponse {
  kind: string;
  etag: string;
  items: VideoItem[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
export interface VideoItem {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: Thumbnails;
      medium: Thumbnails;
      high: Thumbnails;
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: Statistics;
}
