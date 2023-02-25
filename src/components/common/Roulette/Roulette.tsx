import { useState, useCallback } from "react";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import style from "./Roulette.module.scss";

const cx = classNames.bind(style);

interface RouletteProps {
  data: string[];
}

export default function Roulette({ data }: RouletteProps) {
  const [spin, setSpin] = useState("");
  const [stop, setStop] = useState("");

  const handleClick = useCallback(() => {
    setStop((prev) => "");
    setSpin((prev) => "spin");
    setTimeout(
      () => setStop((prev) => "stop"),
      Math.floor(Math.random() * 5000) + 1000
    );
  }, []);
  return (
    <>
      <div className={style.arrow} />
      <ul className={cx("roulette", spin, stop)}>
        {data.map((title) => {
          return (
            <li key={title} className={style.li}>
              <div className={style.text}>{title}</div>
            </li>
          );
        })}
      </ul>
      <Button type="button" color="black" size="medium" onClick={handleClick}>
        돌려 돌려 돌림판
      </Button>
    </>
  );
}
