import { useState, useCallback, useMemo } from "react";
import classNames from "classnames/bind";
import Button from "../Button/Button";
import style from "./Roulette.module.scss";

const cx = classNames.bind(style);

interface RouletteProps {
  data: string[];
}

export default function Roulette({ data }: RouletteProps) {
  const [start, setStart] = useState("");
  const [stop, setStop] = useState("stop");
  const [spin, setSpin] = useState(false);

  const length = useMemo(() => {
    const len = data.length;
    if (len === 0) return "zero";
    if (len === 1) return "one";
    if (len === 2) return "two";
    if (len === 3) return "three";
    if (len === 4) return "four";
    if (len === 5) return "five";
    if (len === 6) return "six";
  }, [data]);

  const handleClick = useCallback(() => {
    setStop("");
    setStart("start");
    setSpin(true);
    setTimeout(() => {
      setStop("stop");
      setSpin(false);
    }, Math.random() * 5000 + 1000);
  }, []);

  if (length === "zero") return null;

  return (
    <>
      <div className={style.arrow} />
      <ul className={cx("circle", start, stop)}>
        {data.map((title) => {
          return (
            <li key={title} className={cx("li", length)}>
              <div className={cx("text", length)}>{title}</div>
            </li>
          );
        })}
      </ul>
      {!spin && (
        <div className={style.buttonContainer}>
          <Button
            type="button"
            color="black"
            size="large"
            onClick={handleClick}
          >
            돌려 돌려 돌림판
          </Button>
        </div>
      )}
    </>
  );
}
