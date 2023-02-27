import { atom } from "recoil";

export const sortState = atom({
  key: "sortState",
  default: "제목순" as string,
});
