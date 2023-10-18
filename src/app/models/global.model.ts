export interface TableHeader {
  col: string;
  field: string;
}

export interface PaginatedData<T> {
  pagination: IPagination
  data: T[];
}

export interface IPagination {
  pageNo: number,
  pageSize: number,
  totalItems: number,
  totalPages: number
}

export interface IDropdownItem {
  label: string;
  value: number;
}
