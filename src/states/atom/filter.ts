import { atom } from "recoil";

export const rangeState = atom({
  key: "rangeState",
  default: "0.5" as string,
});
