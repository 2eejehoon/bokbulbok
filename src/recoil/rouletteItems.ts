import { atom } from "recoil";
import { PlaceCommonDataType } from "@/types/place";

export const rouletteItemsState = atom<PlaceCommonDataType[]>({
  key: "rouletteItemsState",
  default: [],
});
