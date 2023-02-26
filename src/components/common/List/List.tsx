import ListItem from "../ListItem/ListItem";
import style from "./List.module.scss";

export default function List() {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <>
      <ul className={style.container}>
        {data.map((el) => {
          return (
            <ListItem
              key={el}
              id={"1"}
              image={""}
              title={"title"}
              address={"address"}
              phone={"phone"}
            />
          );
        })}
      </ul>
    </>
  );
}
