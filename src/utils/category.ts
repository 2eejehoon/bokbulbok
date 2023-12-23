export const CATEGORY_TO_TEXT = {
  A05020100: "한식",
  A05020200: "양식",
  A05020300: "일식",
  A05020400: "중식",
  A05020700: "이색음식",
  A05020900: "카페",
  A05021000: "클럽",
  기타: "기타",
} as const;
export type Category = keyof typeof CATEGORY_TO_TEXT;
export const convertCategoryToText = (category: Category) => {
  return CATEGORY_TO_TEXT[category] ?? "기타";
};
