import { MouseEvent, useCallback } from "react";
import { SetterOrUpdater } from "recoil";
import style from "./Select.module.scss";

interface SelectProps {
  options: string[];
  setValue: SetterOrUpdater<string>;
}

export default function Select({ options, setValue }: SelectProps) {
  const handleSelect = useCallback(
    (e: MouseEvent<HTMLLIElement>) =>
      setValue((prev) => e.currentTarget.innerHTML),
    [setValue]
  );

  return (
    <ul className={style.ul}>
      {options.map((el) => {
        return (
          <li key={el} className={style.li} onClick={handleSelect}>
            {el}
          </li>
        );
      })}
    </ul>
  );
}
