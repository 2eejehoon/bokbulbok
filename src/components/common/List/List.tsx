import ListItem from "../ListItem/ListItem";
import style from "./List.module.scss";

interface ListProps {
  data: {
    contentid: string;
    firstimage: string;
    title: string;
    addr1: string;
  }[];
}

export default function List({ data }: ListProps) {
  return (
    <>
      <ul className={style.container}>
        {data.map((item) => {
          return (
            <ListItem
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
