import { atom, selector } from "recoil";

export const rangeState = atom<number>({
  key: "rangeState",
  default: 5.0,
});

export const radiusState = selector<number>({
  key: "radiusState",
  get: ({ get }) => {
    const range = get(rangeState);

    return range * 1000;
  },
});
