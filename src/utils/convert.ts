export const convertCategory = (category: string) => {
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

export const convertImageIndex = (index: string) => {
  switch (index) {
    case "1":
      return "one";

    case "2":
      return "two";

    case "3":
      return "three";

    case "4":
      return "four";

    case "5":
      return "five";

    case "6":
      return "six";

    case "7":
      return "seven";

    case "8":
      return "eight";

    case "9":
      return "nine";

    case "10":
      return "ten";

    default:
      return "one";
  }
};

export const convertLength = (length?: number) => {
  switch (length) {
    case 0:
      return "zero";

    case 1:
      return "one";

    case 2:
      return "two";

    case 3:
      return "three";

    case 4:
      return "four";

    case 5:
      return "five";

    case 6:
      return "six";

    default:
      return "zero";
  }
};

export const convertBr = (text: string) => {
  return text.replace(/(<br>|<br\/>|<br \/>)/g, "\r\n");
};

export const rangeConverter = (range: number) => {
  return range * 1000;
};

export const sortConverter = (sort: string) => {
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
};
