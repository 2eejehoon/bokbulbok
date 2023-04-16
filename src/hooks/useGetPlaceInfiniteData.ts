import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteData } from "@tanstack/react-query";
import { FetchNextPageOptions } from "@tanstack/react-query";
import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { QueryType } from "@/types/query";
import { QUERY_KEY } from "@/contant";
import { getPlacelistData } from "@/api/place";
import { PlaceDataType } from "@/types/place";

interface useGetPlaceInfiniteDataReturnType {
  data?: InfiniteData<{
    placeList: PlaceDataType[];
    nextCursor: number;
    prevCursor: number;
  }>;
  hasNextPage?: boolean;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<
    InfiniteQueryObserverResult<
      {
        placeList: PlaceDataType[];
        nextCursor: number;
        prevCursor: number;
      },
      unknown
    >
  >;
}

export default function useGetPlaceInfiniteData(): useGetPlaceInfiniteDataReturnType {
  const router = useRouter();
  const { lng, lat, range, sort } = router.query as QueryType;

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.PLACELIST],
    queryFn: ({ pageParam = 1 }) => getPlacelistData(pageParam, lng, lat, range, sort),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return {
    data,
    hasNextPage,
    fetchNextPage,
  };
}
