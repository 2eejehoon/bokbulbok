import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import style from "./RangeSliderModal.module.scss";
import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";
import Slider from "@/components/common/Slider/Slider";
import { rangeState } from "@/states/atom/filter";

export default function RangeSliderModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState("0.5");
  const [range, setRange] = useRecoilState(rangeState);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setValue((prev) => range);
  }, [range]);

  const handleConfirm = useCallback(() => {
    setModalOpen(false);
    setRange((prev) => value);
  }, [value, setRange]);

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModalOpen}>
        {`${range} km`}
      </Button>
      <Modal
        type="slider"
        modalOpen={modalOpen}
        setModalOpen={handleModalClose}
      >
        <div className={style.sliderContainer}>
          <Slider
            value={value}
            setValue={setValue}
            id="거리"
            unit={"km"}
            min={"0"}
            max={"5"}
            step={"0.5"}
          />
        </div>
        <div className={style.buttonContainer}>
          <Button
            type="button"
            color="white"
            size="small"
            onClick={handleModalClose}
          >
            취소
          </Button>
          <Button
            type="button"
            color="white"
            size="small"
            onClick={handleConfirm}
          >
            확인
          </Button>
        </div>
      </Modal>
    </>
  );
}
