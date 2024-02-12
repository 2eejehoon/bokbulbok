import SliderPopover from "../../common/SliderPopover/SliderPopover";
import useRangeSliderPopover from "./useRangeSliderPopover";

const RangeSliderPopover = () => {
  const { inputValue, buttonValue, min, max, step, unit, onChange, onConfirm, onCancle } = useRangeSliderPopover();

  return (
    <SliderPopover
      inputValue={inputValue}
      buttonValue={buttonValue}
      min={min}
      max={max}
      step={step}
      unit={unit}
      onChange={onChange}
      onConfirm={onConfirm}
      onCancle={onCancle}
    />
  );
};

export default RangeSliderPopover;
