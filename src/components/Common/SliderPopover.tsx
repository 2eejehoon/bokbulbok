import styled from "styled-components";
import { ChangeEvent } from "react";
import Popover from "./Popover";
import Slider from "./Slider";
import Button from "./Button";

type SliderPopoverProps = {
  inputValue: number;
  buttonValue: number;
  min: string;
  max: string;
  step: string;
  unit: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onConfirm: () => void;
  onCancle: () => void;
};

export default function SliderPopover({
  inputValue,
  buttonValue,
  min,
  max,
  step,
  unit,
  onChange,
  onConfirm,
  onCancle,
}: SliderPopoverProps) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Trigger>{`${buttonValue}${unit}`}</Trigger>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content width={350} height={150} onInteractOutside={onCancle}>
          <SliderWrapper>
            <Slider value={inputValue} onChange={onChange} min={min} max={max} step={step} />
            <ButtonContainer>
              <Popover.Close asChild>
                <CancleButton onClick={onCancle}>취소</CancleButton>
              </Popover.Close>
              <Popover.Close>
                <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
              </Popover.Close>
            </ButtonContainer>
          </SliderWrapper>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Trigger = styled(Button)`
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 20px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;

const ConfirmButton = styled(Button)`
  font-size: 12px;
  background-color: black;
  border: 1px solid black;
  border-radius: 20px;
  color: white;
`;

const CancleButton = styled(Button)`
  font-size: 12px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 20px;
  color: black;
`;
