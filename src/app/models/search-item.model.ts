import {
  YoutubeResponseItemState,
  YoutubeResponseStatisticsState,
  YoutubeResponseThumbnailsState,
} from './youtube-response.model';

export default interface SearchItemState {
  id: YoutubeResponseItemState['id'];
  publishedAt: YoutubeResponseItemState['snippet']['publishedAt'];
  title: YoutubeResponseItemState['snippet']['title'];
  description: YoutubeResponseItemState['snippet']['description'];
  posterUrl: YoutubeResponseThumbnailsState['url'];
  statistics: {
    viewCount: YoutubeResponseStatisticsState['viewCount'];
    likeCount: YoutubeResponseStatisticsState['likeCount'];
    dislikeCount: YoutubeResponseStatisticsState['dislikeCount'];
    commentCount: YoutubeResponseStatisticsState['commentCount'];
  };
}
