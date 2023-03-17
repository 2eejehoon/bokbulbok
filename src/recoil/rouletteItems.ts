import { atom } from "recoil";
import { PlaceDataType } from "@/type/place";

export const rouletteItemsState = atom<PlaceDataType[]>({
  key: "rouletteItemsState",
  default: [],
});
