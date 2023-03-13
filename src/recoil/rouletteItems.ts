import { atom } from "recoil";
import { PlaceData } from "@/type";

export const rouletteItemsState = atom<PlaceData[]>({
  key: "rouletteItemsState",
  default: [],
});
