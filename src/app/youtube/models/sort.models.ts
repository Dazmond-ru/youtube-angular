export const enum SortType {
  date = 'date',
  views = 'views',
  none = 'none',
}
export const enum SortOrder {
  asc = '↑',
  desc = '↓',
  none = '',
}

export interface SortState {
  type?: SortType;
  order?: SortOrder;
}
