import { ChangeEvent, memo } from "react";
import styled from "styled-components";

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
    <Containter>
      <Label htmlFor={id}>{text}</Label>
      <Input
        id={id}
        type={"range"}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
    </Containter>
  );
}

const Containter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin: 10px;
  padding-left: 20px;
`;

const Input = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 10px;
  margin: 10px;
  cursor: pointer;
`;

export default memo(Slider);
