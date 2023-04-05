import { atom } from "recoil";

type RouletteItemsType = {
  contentId: string;
  title: string;
};

export const rouletteItemsState = atom<RouletteItemsType[]>({
  key: "rouletteItemsState",
  default: [],
});
