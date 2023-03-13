import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import PlaceItem from "../LocationPlaceItem/LocationPlaceItem";
import { getDataByLocation } from "../../../pages/api/client";
import style from "./LocationPlaceList.module.scss";
import { QUERY_KEY } from "@/contant";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

export default function PlaceList() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.LOCATION],
    queryFn: ({ pageParam = 1 }) => getDataByLocation(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const ref = useRef(null);

  useInfiniteScroll({ ref, hasNextPage, fetchNextPage });

  return (
    <ul className={style.container}>
      {data?.pages.map((place) =>
        place.placeList.map((place) => {
          return (
            <PlaceItem
              key={place.contentid}
              id={place.contentid}
              image={place.firstimage}
              title={place.title}
              address={place.addr1}
            />
          );
        })
      )}
      <li ref={ref} />
    </ul>
  );
}
