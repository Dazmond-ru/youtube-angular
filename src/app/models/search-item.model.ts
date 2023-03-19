import { ResponseItem, Statistics, Thumbnails } from './youtube-response.model';

export default interface SearchItemState {
  id: ResponseItem['id'];
  publishedAt: ResponseItem['snippet']['publishedAt'];
  title: ResponseItem['snippet']['title'];
  description: ResponseItem['snippet']['description'];
  posterUrl: Thumbnails['url'];
  statistics: {
    viewCount: Statistics['viewCount'];
    likeCount: Statistics['likeCount'];
    dislikeCount: Statistics['dislikeCount'];
    commentCount: Statistics['commentCount'];
  };
}
