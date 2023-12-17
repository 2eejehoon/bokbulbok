import { Sort } from "./sort";

const CODE_TO_AREA = {
  1: "서울",
  2: "인천",
  3: "대전",
  4: "대구",
  5: "광주",
  6: "부산",
  7: "울산",
  8: "세종",
  31: "경기도",
  32: "강원도",
} as const;
export type AreaCode = keyof typeof CODE_TO_AREA;
export const convertCodeToArea = (code: AreaCode) => {
  return CODE_TO_AREA[code] ?? "서울";
};

const AREA_TO_CODE = {
  서울: 1,
  인천: 2,
  대전: 3,
  대구: 4,
  광주: 5,
  부산: 6,
  울산: 7,
  세종: 8,
  경기도: 31,
  강원도: 32,
};
export type Area = keyof typeof AREA_TO_CODE;
export const convertAreaToCode = (area: Area) => {
  return AREA_TO_CODE[area] ?? 1;
};

export type AreaQuery<T> = T & {
  areaCode: AreaCode;
  sort: Sort;
};

export const AREA_ARRAY = [
  "서울",
  "인천",
  "대전",
  "대구",
  "광주",
  "부산",
  "울산",
  "세종",
  "경기도",
  "강원도",
] as const;

export const isAreaQuery = <T extends {}>(query: T): query is AreaQuery<T> => {
  return "areaCode" in query && "sort" in query;
};
