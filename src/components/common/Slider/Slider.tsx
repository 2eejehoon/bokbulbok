import { ChangeEvent, memo } from "react";
import style from "./Slider.module.scss";

interface SliderProps {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
  text: string;
  min: string;
  max: string;
  step: string;
}

function Slider({ value, onChange, id, text, min, max, step }: SliderProps) {
  return (
    <div className={style.container}>
      <label htmlFor={id} className={style.label}>
        {text}
      </label>
      <input
        id={id}
        type={"range"}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        className={style.input}
      />
    </div>
  );
}

export default memo(Slider);
