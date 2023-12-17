import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteData } from "@tanstack/react-query";
import { FetchNextPageOptions } from "@tanstack/react-query";
import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { isLocationQuery } from "@/utils/location";
import { QUERY_KEY } from "@/contant";
import { PlaceData } from "@/types/place";
import { getLocationBasedPlacelistData } from "@/api/location";

interface useGetPlaceInfiniteDataReturnType {
  data?: InfiniteData<{
    placeList: PlaceData[];
    nextCursor: number;
    prevCursor: number;
  }>;
  hasNextPage?: boolean;
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<
    InfiniteQueryObserverResult<
      {
        placeList: PlaceData[];
        nextCursor: number;
        prevCursor: number;
      },
      unknown
    >
  >;
  isFetching: boolean;
}

export default function useGetLocationBasedPlaceInfiniteData(): useGetPlaceInfiniteDataReturnType {
  const router = useRouter();

  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: [QUERY_KEY.LOCATION_LIST],
    queryFn: ({ pageParam = 1 }) => {
      if (isLocationQuery(router.query)) {
        const { lng, lat, range, sort } = router.query;
        return getLocationBasedPlacelistData(pageParam, lng, lat, range, sort);
      }
      return getLocationBasedPlacelistData(
        1,
        "126.969655",
        "37.55376",
        "5000",
        "D"
      );
    },
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? 1,
  });

  return {
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
  };
}
