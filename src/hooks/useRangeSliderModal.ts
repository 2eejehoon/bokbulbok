import { useRouter } from "next/router";
import { useState, useCallback, ChangeEvent } from "react";
import useModal from "./useModal";
import { convertQueryToRange, convertRangeToQuery } from "@/utils/convert";

type useRangeSliderModalReturnType = [
  rangeValue: number,
  isModalOpen: boolean,
  handleModalOpen: () => void,
  handleModalClose: () => void,
  handleRangeChange: (e: ChangeEvent<HTMLInputElement>) => void,
  handleConfirm: () => void
];

export default function useRangeSliderModal(): useRangeSliderModalReturnType {
  const router = useRouter();
  const { lng, lat, range, sort } = router.query;
  const [rangeValue, setRangeValue] = useState(convertQueryToRange(String(range)));
  const [isModalOpen, handleModalOpen, handleModalClose] = useModal();

  const handleRangeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  }, []);

  const handleConfirm = useCallback(() => {
    router.push(
      `/place/location?lng=${lng}&lat=${lat}&range=${convertRangeToQuery(
        rangeValue
      )}&sort=${sort}`
    );
    handleModalClose();
  }, [rangeValue]);

  return [
    rangeValue,
    isModalOpen,
    handleModalOpen,
    handleModalClose,
    handleRangeChange,
    handleConfirm,
  ];
}
