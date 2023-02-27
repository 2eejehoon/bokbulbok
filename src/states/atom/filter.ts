import { atom } from "recoil";

export const restaurantState = atom({
  key: "restaurant",
  default: "전체" as string,
});

export const rangeState = atom({
  key: "rangeState",
  default: "0.5" as string,
});
