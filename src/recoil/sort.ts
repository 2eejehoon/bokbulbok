import { atom } from "recoil";

export const sortState = atom<string>({
  key: "sortState",
  default: "제목순",
});
