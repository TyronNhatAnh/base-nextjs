export interface ApiResponse<T> {
  payload: T;
  status: number;
  message: string;
}
export interface ApiResponseWithPaging<T> {
  payload: T;
  status: number;
  message: string;
  metaData: {
    page: number;
    pageSize: number;
    lastPage: number;
    totalItems: number;
    sort: string;
    direction: string;
  };
}
