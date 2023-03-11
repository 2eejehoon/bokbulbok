import { atom } from "recoil";

export const categoryState = atom({
  key: "category",
  default: "모두" as string,
});
