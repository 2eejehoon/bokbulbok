export const CATEGORY_TO_TEXT = {
  A05020100: "한식",
  A05020200: "양식",
  A05020300: "일식",
  A05020400: "중식",
  A05020700: "이색음식",
  A05020900: "카페",
  A05021000: "클럽",
} as const;

export const convertCategoryToText = (
  category?: keyof typeof CATEGORY_TO_TEXT
) => {
  return category ? CATEGORY_TO_TEXT[category] : "기타";
};

export const LENGTH_TO_TEXT = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
} as const;

export const convertLengthToText = (length?: keyof typeof LENGTH_TO_TEXT) => {
  return length ? LENGTH_TO_TEXT[length] : "zero";
};

export const convertBrToSpace = (text?: string) => {
  return text?.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n");
};

export const convertRangeToQuery = (range: number) => {
  return range * 1000;
};

export const SORT_TO_QUERY = {
  제목순: "A",
  수정순: "B",
  등록순: "D",
} as const;

export const convertSortToQuery = (sort: keyof typeof SORT_TO_QUERY) => {
  return SORT_TO_QUERY[sort] ?? "D";
};

export const QUERY_TO_SORT = { A: "제목순", B: "수정순", D: "등록순" } as const;

export const convertQueryToSort = (query: keyof typeof QUERY_TO_SORT) => {
  return QUERY_TO_SORT[query] ?? "등록순";
};

export const convertQueryToRange = (query: string) => {
  return Number(query) / 1000;
};
