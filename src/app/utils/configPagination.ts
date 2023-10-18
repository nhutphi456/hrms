import { IPagination } from '../models/global.model';

export function configPagination(pagination: IPagination) {
  const { pageNo, pageSize, totalItems, totalPages } = pagination;

  return {
    page: pageNo,
    first: pageSize * (pageNo - 1) + 1,
    rows: pageSize,
    pageCount: totalPages,
    totalRecord: totalItems,
  };
}
