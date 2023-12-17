export type Response<T> = {
  response: {
    body: {
      items: { item: T };
      totalCount: number;
      numOfRows: number;
      pageNo: number;
    };
  };
};
