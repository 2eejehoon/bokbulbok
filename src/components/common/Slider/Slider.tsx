import { ChangeEvent, Dispatch, SetStateAction } from "react";
import style from "./Slider.module.scss";

interface SliderProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
  id: string;
  text: string;
  min: string;
  max: string;
  step: string;
}

function Slider({ value, setValue, id, text, min, max, step }: SliderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      <div className={style.container}>
        <label htmlFor={id} className={style.label}>
          {text}
        </label>
        <input
          id={id}
          type={"range"}
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

export default Slider;
