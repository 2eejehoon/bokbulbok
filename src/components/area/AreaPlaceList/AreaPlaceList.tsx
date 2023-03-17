import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import AreaPlaceItem from "../AreaPlaceItem/AreaPlaceItem";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import style from "./AreaPlaceList.module.scss";
import { getDataByArea } from "@/pages/api/place";
import { QUERY_KEY } from "@/contant";

export default function AreaPlaceList() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.AREA],
    queryFn: ({ pageParam = 1 }) => getDataByArea(pageParam),
    getNextPageParam: (lastpage) => lastpage?.nextCursor,
  });

  const ref = useRef(null);

  useInfiniteScroll({ ref, hasNextPage, fetchNextPage });

  return (
    <ul className={style.container}>
      {data?.pages.map((page) =>
        page.placeList?.map((place) => {
          return (
            <AreaPlaceItem
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
