import {
  ChangeEvent,
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  memo,
  useId,
} from "react";
import styled from "styled-components";

interface SliderProps extends HTMLAttributes<HTMLInputElement> {
  value?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  min: string;
  max: string;
  step: string;
}

const Slider = forwardRef(
  (
    { value, onChange, min, max, step, ...props }: SliderProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const labelId = useId();
    const inputId = useId();
    return (
      <Containter>
        <Label id={labelId} htmlFor={inputId}>
          {value && `${value}km`}
        </Label>
        <Input
          {...props}
          id={inputId}
          ref={ref}
          type={"range"}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
      </Containter>
    );
  }
);

Slider.displayName = "Slider";

const Containter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 100%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: black;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
`;

const Input = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 10px;
  cursor: pointer;
`;

export default memo(Slider);
