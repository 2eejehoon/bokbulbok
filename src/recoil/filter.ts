import { atom } from "recoil";

export const rangeState = atom<string>({
  key: "rangeState",
  default: "0.5" as string,
});
