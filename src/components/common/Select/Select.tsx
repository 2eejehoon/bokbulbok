import { MouseEvent } from "react";
import style from "./Select.module.scss";

interface SelectProps {
  options: string[];
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

function Select({ options, onClick }: SelectProps) {
  return (
    <ul className={style.ul}>
      {options.map((option) => {
        return (
          <li key={option} className={style.li} onClick={onClick}>
            {option}
          </li>
        );
      })}
    </ul>
  );
}

export default Select;
