import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/contant";
import { isAreaQuery } from "@/utils/area";
import { getAreaBasedPlaceListData } from "@/api/area";

const useGetAreaBasedPlaceInfiniteData = () => {
  const router = useRouter();

  return useInfiniteQuery({
    queryKey: [QUERY_KEY.AREA_LIST],
    queryFn: ({ pageParam = 1 }) => {
      if (isAreaQuery(router.query)) {
        const { areaCode, sort } = router.query;
        return getAreaBasedPlaceListData(pageParam, areaCode, sort);
      }
      return getAreaBasedPlaceListData(1, 1, "D");
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? 1,
  });
};

export default useGetAreaBasedPlaceInfiniteData;
