import { useRef } from "react";
import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";
import PlaceItem from "../PlaceItem/PlaceItem";
import style from "./PlaceList.module.scss";
import { QueryType } from "@/types/query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { getPlaceData } from "@/pages/api/place";
import { QUERY_KEY } from "@/contant";

export default function PlaceList() {
  const ref = useRef(null);
  const router = useRouter();
  const { lng, lat, range, sort } = router.query as QueryType;

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.PLACELIST],
    queryFn: ({ pageParam = 1 }) => getPlaceData(pageParam, lng, lat, range, sort),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  useInfiniteScroll({ ref, hasNextPage, fetchNextPage });
  return (
    <ul className={style.container}>
      {data?.pages.map((place) =>
        place.placeList?.map((place) => {
          return (
            <PlaceItem
              key={place.contentid}
              contentId={place.contentid}
              image={place.firstimage}
              title={place.title}
              address={place.addr1}
              category={place.cat3}
            />
          );
        })
      )}
      <li ref={ref} />
    </ul>
  );
}
