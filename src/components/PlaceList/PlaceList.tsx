import PlaceListItem from "../PlaceItem/PlaceItem";
import style from "./PlaceList.module.scss";

interface PlaceListProps {
  data: {
    contentid: string;
    firstimage: string;
    title: string;
    addr1: string;
  }[];
}

export default function PlaceList({ data }: PlaceListProps) {
  return (
    <>
      <ul className={style.container}>
        {data.map((item) => {
          return (
            <PlaceListItem
              key={item.title}
              id={item.contentid}
              image={item.firstimage}
              title={item.title}
              address={item.addr1}
            />
          );
        })}
      </ul>
    </>
  );
}
