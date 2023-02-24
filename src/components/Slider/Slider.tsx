import style from "./Slider.module.scss";
import { useRecoilState } from "recoil";
import { distanceState } from "@/states/distance";
import { ChangeEvent } from "react";

export default function Slider() {
  const [distance, setDistance] = useRecoilState<string>(distanceState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDistance((prev) => e.target.value);
  };

  return (
    <>
      <label htmlFor="distance" aria-label="거리" className={style.label}>
        {`거리 : ${distance} km`}
      </label>
      <input
        type="range"
        value={distance}
        onChange={handleChange}
        min="0"
        max="3"
        step="0.5"
        className={style.input}
      />
    </>
  );
}
