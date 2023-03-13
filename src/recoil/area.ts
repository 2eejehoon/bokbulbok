import { atom, selector } from "recoil";

export const sidoState = atom<string>({
  key: "sido",
  default: "전체",
});

export const sidoCodeState = atom<number>({
  key: "sidoCode",
  default: 0,
});
