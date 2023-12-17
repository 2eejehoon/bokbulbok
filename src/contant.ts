import { Sort } from "./utils/sort";

export const QUERY_KEY = {
  LOCATION_LIST: "LOCATION_LIST",
  AREA_LIST: "AREA_LIST",
  DETAIL_COMMON: "DETAIL_COMMON",
  DETAIL_INTRO: "DETAIL_INTRO",
  DETAIL_IMAGE: "DETAIL_IMAGE",
} as const;

export const SORT_ARRAY: Sort[] = ["등록순", "수정순", "제목순"];
