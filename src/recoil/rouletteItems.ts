import { atom } from "recoil";
import { PlaceData } from "@/type/place";

export const rouletteItemsState = atom<PlaceData[]>({
  key: "rouletteItemsState",
  default: [],
});
