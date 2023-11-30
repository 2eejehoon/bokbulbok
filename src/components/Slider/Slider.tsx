import {
  ForwardedRef,
  HTMLAttributes,
  forwardRef,
  memo,
  useEffect,
  useId,
} from "react";
import styled from "styled-components";

interface SliderProps extends HTMLAttributes<HTMLInputElement> {
  min: string;
  max: string;
  step: string;
}

const Slider = forwardRef(
  (
    { min, max, step, ...props }: SliderProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const labelId = useId();
    const inputId = useId();

    useEffect(() => {
      const label = document.getElementById(labelId);
      const input = document.getElementById(inputId);
      const onInput = (e: Event) => {
        if (!label) {
          return;
        }
        // @ts-ignore
        label.innerHTML = `${e.target?.value as string}km`;
      };
      input?.addEventListener("input", onInput);

      return () => {
        input?.removeEventListener("input", onInput);
      };
    }, []);

    return (
      <Containter>
        <Label
          id={labelId}
          htmlFor={inputId}
        >{`${props.defaultValue}km`}</Label>
        <Input
          {...props}
          id={inputId}
          ref={ref}
          type={"range"}
          min={min}
          max={max}
          step={step}
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
  justify-content: flex-start;
  align-items: center;
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
