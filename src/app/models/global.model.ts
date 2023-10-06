export interface TableHeader {
  col: string;
  field: string;
}

export interface DataResponse<T> {
  page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: T[]
}