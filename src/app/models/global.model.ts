export interface TableHeader {
  col: string;
  field: string;
}

export interface PaginatedData<T> {
  pagination: {
    pageNo: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
  data: T[];
}

export interface IDropdownItem {
  label: string;
  value: number;
}
