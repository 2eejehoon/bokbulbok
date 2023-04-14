import classNames from "classnames/bind";
import Button from "../common/Button/Button";
import RouletteItem from "../RouletteItem/RouletteItem";
import style from "./Roulette.module.scss";
import useRoulette from "@/hooks/useRoulette";

const cx = classNames.bind(style);

export default function Roulette() {
  const [rouletteItems, start, stop, spin, length, handleSpinClick] = useRoulette();

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
