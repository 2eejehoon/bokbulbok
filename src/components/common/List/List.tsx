import ListItem from "../ListItem/ListItem";
import style from "./List.module.scss";

interface ListProps {
  data: string[];
}

export default function List({ data }: ListProps) {
  return (
    <>
      <ul className={style.container}>
        {data.map((item) => {
          return (
            <ListItem
              key={item}
              id={item}
              image={""}
              title={item}
              address={item}
              phone={item}
            />
          );
        })}
      </ul>
    </>
  );
}
