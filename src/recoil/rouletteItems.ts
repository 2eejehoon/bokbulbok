import { atom } from "recoil";
import { PlaceDataType } from "@/types/place";

export const rouletteItemsState = atom<PlaceDataType[]>({
  key: "rouletteItemsState",
  default: [],
});
