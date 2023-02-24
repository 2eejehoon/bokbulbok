import classNames from "classnames/bind";
import style from "./Roulette.module.scss";

const cx = classNames.bind(style);

export default function Roulette() {
  return (
    <>
      <ul className={style.ul}>
        {[1, 2, 3, 4, 5, 6].map((el, idx) => {
          return (
            <li key={el} className={cx("list")}>
              <div className={style.text}>{el}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
