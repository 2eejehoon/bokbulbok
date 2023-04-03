import { useRouter } from "next/router";

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

export default function useCustomRouter() {
  const router = useRouter();
  const { lng, lat, range, sort } = router.query;

  const customRouterPush = (type: string, value: any) => {
    const lngValue = type === "location" ? value.lng : lng;
    const latValue = type === "location" ? value.lat : lat;
    const rangeValue = type === "range" ? rangeConverter(value) : range;
    const sortValue = type === "sort" ? sortConverter(value) : sort;
    console.log(lng, lat, range, sort);
    console.log(lngValue, latValue, rangeValue, sortValue);

    router.push(
      `/place/location?lng=${lngValue}&lat=${latValue}&range=${rangeValue || 5000}&sort=${
        sortValue || "A"
      }`
    );
  };

  return customRouterPush;
}
