export const SORT_TO_CODE = {
  제목순: "A",
  수정순: "B",
  등록순: "D",
} as const;
export type Sort = keyof typeof SORT_TO_CODE;
export const convertSortToQuery = (sort: Sort) => {
  return SORT_TO_CODE[sort] ?? "D";
};
export const CODE_TO_SORT = { A: "제목순", B: "수정순", D: "등록순" } as const;
export type SortCode = keyof typeof CODE_TO_SORT;
export const convertQueryToSort = (code: SortCode) => {
  return CODE_TO_SORT[code] ?? "등록순";
};
export const convertQueryToRange = (query: string) => {
  return Number(query) / 1000;
};
