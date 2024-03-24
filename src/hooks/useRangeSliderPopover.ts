import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { ChangeEvent, RefObject, useRef, useState } from "react";
import { LocationQuery } from "@/utils/location";
import { convertRangeToQuery } from "@/utils/convert";
import { convertQueryToRange } from "@/utils/sort";

type useRangeSliderPopoverReturnType = {
  popoverRef: RefObject<HTMLDivElement>;
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

const MIN = "0.5";
const MAX = "50";
const STEP = "0.5";
const UNIT = "km";

const useRangeSliderPopover = (): useRangeSliderPopoverReturnType => {
  const popoverRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { lng, lat, range, sort } = router.query as LocationQuery<ParsedUrlQuery>;
  const [inputValue, setInputValue] = useState(convertQueryToRange(range));
  const [buttonValue, setButtonValue] = useState(Number(range) / 1000);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const onConfirm = () => {
    router.push(`/location/location?lng=${lng}&lat=${lat}&range=${convertRangeToQuery(inputValue)}&sort=${sort}`);
    setButtonValue(inputValue);
  };

  const onCancle = () => {
    setInputValue(convertQueryToRange(range));
  };

  return {
    popoverRef,
    inputValue,
    buttonValue,
    min: MIN,
    max: MAX,
    step: STEP,
    unit: UNIT,
    onChange,
    onConfirm,
    onCancle,
  };
};

export default useRangeSliderPopover;
