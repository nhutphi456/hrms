export interface PagingInfo {
  page: number;
  first: number;
  rows: number;
  pageCount: number;
  totalRecord: number;
}

export interface PageChangeEvent {
  page: number;
  first: number;
  row: number;
  pageCount: number;
}
