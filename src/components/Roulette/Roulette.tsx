import { useState, useCallback, useMemo } from "react";
import classNames from "classnames/bind";
import { useRecoilValue } from "recoil";
import Button from "../common/Button/Button";
import RouletteItem from "../RouletteItem/RouletteItem";
import style from "./Roulette.module.scss";
import { rouletteItemsState } from "@/recoil/rouletteItems";

const cx = classNames.bind(style);

export default function Roulette() {
  const rouletteItems = useRecoilValue(rouletteItemsState);
  const [start, setStart] = useState("");
  const [stop, setStop] = useState("stop");
  const [spin, setSpin] = useState(false);

  const length = useMemo(() => {
    const len = rouletteItems.length;

    switch (len) {
      case 0:
        return "zero";

      case 1:
        return "one";

      case 2:
        return "two";

      case 3:
        return "three";

      case 4:
        return "four";

      case 5:
        return "five";

      case 6:
        return "six";

      default:
        break;
    }
  }, [rouletteItems]);

  const handleSpinClick = useCallback(() => {
    setStop("");
    setStart("start");
    setSpin(true);
    setTimeout(() => {
      setStop("stop");
      setSpin(false);
    }, Math.random() * 5000 + 1000);
  }, []);

  if (length === "zero") return <p>돌려 돌려 돌림판! 어..? 돌릴게 없잖아! &#128555;</p>;
  return (
    <>
      <div className={style.arrow} />
      <ul className={cx("circle", start, stop)}>
        {rouletteItems.map((item) => {
          return (
            <RouletteItem
              key={item.contentId}
              contentId={item.contentId}
              title={item.title}
              length={length as string}
            />
          );
        })}
      </ul>
      {!spin && (
        <div className={style.buttonContainer}>
          <Button
            type={"button"}
            color={"black"}
            size={"large"}
            onClick={handleSpinClick}
          >
            돌려 돌려 돌림판
          </Button>
        </div>
      )}
    </>
  );
}
