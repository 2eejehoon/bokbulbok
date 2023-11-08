import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";
import { InfiniteData } from "@tanstack/react-query";
import { FetchNextPageOptions } from "@tanstack/react-query";
import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { LocationQuery } from "@/types/query";
import { QUERY_KEY } from "@/contant";
import { getPlacelistData } from "@/api/place";
import { PlaceData } from "@/types/place";

interface useGetPlaceInfiniteDataReturnType {
  data?: InfiniteData<{
    placeList: PlaceData[];
    nextCursor: number;
    prevCursor: number;
  }>;
  hasNextPage?: boolean;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<
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

export default function useGetPlaceInfiniteData(): useGetPlaceInfiniteDataReturnType {
  const router = useRouter();
  const { lng, lat, range, sort } =
    router.query as LocationQuery<ParsedUrlQuery>;

  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: [QUERY_KEY.PLACELIST],
    queryFn: ({ pageParam = 1 }) =>
      getPlacelistData(pageParam, lng, lat, range, sort),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return {
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
  };
}
