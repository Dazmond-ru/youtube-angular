export interface YoutubeResponseState {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeResponseItemState[];
}

export interface YoutubeResponseItemState {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: YoutubeResponseThumbnailsState;
      medium?: YoutubeResponseThumbnailsState;
      high?: YoutubeResponseThumbnailsState;
      standard?: YoutubeResponseThumbnailsState;
      maxres?: YoutubeResponseThumbnailsState;
    };
    localized?: {
      title: string;
      description: string;
    };
  };
  statistics: YoutubeResponseStatisticsState;
}

export interface YoutubeResponseThumbnailsState {
  url: string;
  width: number;
  height: number;
}

export interface YoutubeResponseStatisticsState {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
