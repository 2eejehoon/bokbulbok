import { atom, selector } from "recoil";

export const sortState = atom<string>({
  key: "sortState",
  default: "제목순",
});

export const arrangeState = selector<string>({
  key: "arrangeState",
  get: ({ get }) => {
    const sort = get(sortState);

    switch (sort) {
      case "제목순":
        return "A";

      case "수정순":
        return "B";

      case "등록순":
        return "D";

      default:
        return "A";
    }
  },
});
