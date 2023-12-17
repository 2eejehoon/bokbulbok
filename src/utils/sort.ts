export const SORT_TO_QUERY = {
  제목순: "A",
  수정순: "B",
  등록순: "D",
} as const;
export type Sort = keyof typeof SORT_TO_QUERY;
export const convertSortToQuery = (sort: Sort) => {
  return SORT_TO_QUERY[sort] ?? "D";
};
export const QUERY_TO_SORT = { A: "제목순", B: "수정순", D: "등록순" } as const;
export type Query = keyof typeof QUERY_TO_SORT;
export const convertQueryToSort = (query: Query) => {
  return QUERY_TO_SORT[query] ?? "등록순";
};
export const convertQueryToRange = (query: string) => {
  return Number(query) / 1000;
};
