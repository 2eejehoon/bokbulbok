export const getCategory = (category: string) => {
  switch (category) {
    case "A05020100":
      return "한식";

    case "A05020200":
      return "양식";

    case "A05020300":
      return "일식";

    case "A05020400":
      return "중식";

    case "A05020700":
      return "이색음식";

    case "A05020900":
      return "카페";

    case "A05021000":
      return "클럽";

    default:
      return "기타";
  }
};
