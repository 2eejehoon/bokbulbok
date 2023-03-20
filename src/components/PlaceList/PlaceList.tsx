import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useRecoilValue } from "recoil";
import PlaceItem from "../PlaceItem/PlaceItem";
import style from "./PlaceList.module.scss";
import { getPlaceData } from "@/pages/api/place";
import { QUERY_KEY } from "@/contant";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { arrangeState } from "@/recoil/sort";
import { radiusState } from "@/recoil/range";
import { locationState } from "@/recoil/location";

export default function PlaceList() {
  const { lng, lat } = useRecoilValue(locationState);
  const radius = useRecoilValue(radiusState);
  const arrange = useRecoilValue(arrangeState);

  const ref = useRef(null);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.PLACELIST],
    queryFn: ({ pageParam = 1 }) => getPlaceData(pageParam, lng, lat, radius, arrange),
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
              id={place.contentid}
              image={place.firstimage}
              title={place.title}
              address={place.addr1}
              category={place.cat3}
            />
          );
        })
      )}
      <li className={style.target} ref={ref} />
    </ul>
  );
}
