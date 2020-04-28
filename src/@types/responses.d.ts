declare namespace Responses {
  interface JSONResponse<T> {
    error: string;
    data: T;
  }
  interface JSONResponseWithEvents<T> {
    events: string[];
    data: T;
  }
}