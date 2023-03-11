import { ChangeEvent, useCallback, Dispatch, SetStateAction } from "react";
import style from "./Slider.module.scss";

interface SliderProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  id: string;
  text: string;
  min: string;
  max: string;
  step: string;
}

export default function Slider({
  value,
  setValue,
  id,
  text,
  min,
  max,
  step,
}: SliderProps) {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    [setValue]
  );

  return (
    <>
      <div className={style.container}>
        <label htmlFor={id} className={style.label}>
          {text}
        </label>
        <input
          id={id}
          type="range"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          className={style.input}
        />
      </div>
    </>
  );
}
