import { Sort } from "./utils/convert";

export const QUERY_KEY = {
  PLACELIST: "PLACELIST",
  PLACECOMMON: "PLACECOMMON",
  PLACEINTRO: "PLACEINTRO",
  PLACEIMAGE: "PLACEIMAGE",
} as const;

export const SORT_ARRAY: Sort[] = ["등록순", "수정순", "제목순"];
