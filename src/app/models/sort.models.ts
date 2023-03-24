export type SortType = 'date' | 'views';
export type SortOrder = 'asc' | 'desc';

export interface SortState {
  type?: SortType;
  order?: SortOrder;
}
