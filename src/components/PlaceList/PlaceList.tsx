import { InfiniteData } from "@tanstack/react-query";
import PlaceItem from "../PlaceItem/PlaceItem";
import style from "./PlaceList.module.scss";
import { PlaceDataType } from "@/types/place";

interface PlaceListProps {
  data?: InfiniteData<{
    placeList: PlaceDataType[];
    nextCursor: number;
    prevCursor: number;
  }>;
}

export default function PlaceList({ data }: PlaceListProps) {
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
    </ul>
  );
}
