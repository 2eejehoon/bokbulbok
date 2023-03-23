import { useRouter } from "next/router";

export default function useQueryRouter() {
  const router = useRouter();
  const { lng, lat, range, sort } = router.query;

  const converter = (sort: string) => {
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

  const handleRouterPush = (rangeValue?: number, sortValue?: string) => {
    console.log(rangeValue);
    router.push(
      `/place/location?lng=${lng}&lat=${lat}&range=${
        rangeValue ? rangeValue * 1000 : range
      }&sort=${sortValue ? converter(sortValue) : sort}`
    );
  };

  return handleRouterPush;
}
