export default interface SearchItem {
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
