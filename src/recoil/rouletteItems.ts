import { atom } from "recoil";
import { RouletteItemType } from "@/types/roulette";

export const rouletteItemsState = atom<RouletteItemType[]>({
  key: "rouletteItemsState",
  default: [],
});
