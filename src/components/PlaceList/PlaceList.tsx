import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import PlaceItem from "../PlaceItem/PlaceItem";
import style from "./PlaceList.module.scss";
import { getPlaceData } from "@/pages/api/place";
import { QUERY_KEY } from "@/contant";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useGeolocation } from "@/hooks/useGeolocation";

export default function PlaceList() {
  const { lng, lat } = useGeolocation();

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.PLACE],
    queryFn: ({ pageParam = 1 }) => getPlaceData(pageParam, lng, lat),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const ref = useRef(null);

  useInfiniteScroll({ ref, hasNextPage, fetchNextPage });

  return (
    <ul className={style.container}>
      {data?.pages.map((place) =>
        place.placeList?.map((place) => {
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
