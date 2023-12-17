import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { useRef, useState, useCallback, RefObject } from "react";
import { convertRangeToQuery } from "@/utils/convert";
import { convertQueryToRange } from "@/utils/sort";
import { LocationQuery } from "@/utils/location";

type useRangeSliderModalReturnType = [
  rangeValue: number,
  sliderInputRef: RefObject<HTMLInputElement>,
  isSliderOpen: boolean,
  handleButtonClick: () => void,
  handleSliderClose: () => void,
  handleConfirm: () => void
];

export default function useRangeSliderModal(): useRangeSliderModalReturnType {
  const router = useRouter();
  const { lng, lat, range, sort } =
    router.query as LocationQuery<ParsedUrlQuery>;
  const sliderInputRef = useRef<HTMLInputElement>(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const [rangeValue, setRangeValue] = useState(convertQueryToRange(range));

  const handleButtonClick = useCallback(
    () => setIsSliderOpen((prev) => !prev),
    []
  );

  const handleSliderClose = useCallback(() => setIsSliderOpen(false), []);

  const handleConfirm = () => {
    setRangeValue(Number(sliderInputRef.current?.value));
    router.push(
      `/place/location?lng=${lng}&lat=${lat}&range=${convertRangeToQuery(
        Number(sliderInputRef.current?.value)
      )}&sort=${sort}`
    );
    setIsSliderOpen(false);
  };

  return [
    rangeValue,
    sliderInputRef,
    isSliderOpen,
    handleButtonClick,
    handleSliderClose,
    handleConfirm,
  ];
}
