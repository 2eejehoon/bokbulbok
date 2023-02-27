import { MouseEvent, useCallback } from "react";
import { SetterOrUpdater } from "recoil";
import style from "./Select.module.scss";

interface SelectProps {
  value: string;
  setValue: SetterOrUpdater<string>;
}

export default function Select({ value, setValue }: SelectProps) {
  const categories = ["전체", "한식", "중식", "양식", "일식", "동남아"];

  const handleSelect = useCallback(
    (e: MouseEvent<HTMLLIElement>) =>
      setValue((prev) => e.currentTarget.innerHTML),
    [setValue]
  );

  return (
    <ul className={style.ul}>
      {categories.map((el) => {
        return (
          <li key={el} className={style.li} onClick={handleSelect}>
            {el}
          </li>
        );
      })}
    </ul>
  );
}
