import { MouseEvent } from "react";
import style from "./Select.module.scss";

interface SelectProps {
  options: string[];
  value: string;
  onChange: (e: MouseEvent<HTMLLIElement>) => void;
}

export default function Select({ options, value, onChange }: SelectProps) {
  return (
    <ul className={style.ul}>
      {options.map((el) => {
        return (
          <li key={el} className={style.li} onClick={onChange}>
            {el}
          </li>
        );
      })}
    </ul>
  );
}
