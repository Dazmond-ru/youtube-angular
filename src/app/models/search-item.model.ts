import { ResponseItem, Statistics, Thumbnails } from './youtube-response.model';

export default interface SearchItemState {
  id: string;
  publishedAt: string;
  title: string;
  description: string;
  posterUrl: string;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    commentCount: string;
  };
}
