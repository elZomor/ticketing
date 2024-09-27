export interface PaginatorModel {
  current_page: number;
  total_page_number: number;
  next: string | null;
  previous: string | null;
}
