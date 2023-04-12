import { useState, useCallback, useMemo } from "react";
import classNames from "classnames/bind";
import { useRecoilValue } from "recoil";
import Button from "../common/Button/Button";
import RouletteItem from "../RouletteItem/RouletteItem";
import style from "./Roulette.module.scss";
import { rouletteItemsState } from "@/recoil/rouletteItems";
import { convertLength } from "@/utils/convert";

const cx = classNames.bind(style);

export default function Roulette() {
  const rouletteItems = useRecoilValue(rouletteItemsState);
  const [start, setStart] = useState("");
  const [stop, setStop] = useState("stop");
  const [spin, setSpin] = useState(false);

  const handleSpinClick = useCallback(() => {
    setStop("");
    setStart("start");
    setSpin(true);
    setTimeout(() => {
      setStop("stop");
      setSpin(false);
    }, Math.random() * 5000 + 1000);
  }, []);

  const length = useMemo(
    () => convertLength(rouletteItems.length),
    [rouletteItems.length]
  );

  const spinButton = useMemo(() => {
    if (spin) return null;

    return (
      <Button type={"button"} color={"black"} size={"large"} onClick={handleSpinClick}>
        돌려 돌려 돌림판
      </Button>
    );
  }, [spin]);

  if (length === "zero") return <p>음식점을 추가해보세요 &#128555;</p>;
  return (
    <>
      <div className={style.arrow} />
      <ul className={cx("circle", [start, stop])}>
        {rouletteItems.map((item) => {
          return (
            <RouletteItem
              key={item.contentId}
              contentId={item.contentId}
              title={item.title}
              length={length}
            />
          );
        })}
      </ul>
      <div className={style.buttonContainer}>{spinButton}</div>
    </>
  );
}
