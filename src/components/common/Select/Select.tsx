import { MouseEvent } from "react";
import style from "./Select.module.scss";

interface SelectProps {
  options: string[];
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

export default function Select({ options, onClick }: SelectProps) {
  return (
    <ul className={style.ul}>
      {options.map((el) => {
        return (
          <li key={el} className={style.li} onClick={onClick}>
            {el}
          </li>
        );
      })}
    </ul>
  );
}
