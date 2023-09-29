export interface HrmsTable<T> {
  page?: number;
  first?: number;
  rows?: number;
  pageCount?: number;
  totalRecord?: number;
  data: {
    header: TableHeader[];
    body: T[];
  };
}
interface TableHeader {
  col: string;
  field: string;
}
