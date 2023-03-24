import { useRouter } from "next/router";

export default function useCustomRouter() {
  const router = useRouter();
  const { lng, lat, range, sort } = router.query;

  const rangeConverter = (range: number) => {
    return range * 1000;
  };

  const sortConverter = (sort: string) => {
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

  const customRouterPush = (rangeValue?: number, sortValue?: string) => {
    const rangeQuery = rangeValue ? rangeConverter(rangeValue) : range;
    const sortQuery = sortValue ? sortConverter(sortValue) : sort;

    router.push(
      `/place/location?lng=${lng}&lat=${lat}&range=${rangeQuery}&sort=${sortQuery}`
    );
  };

  return customRouterPush;
}
