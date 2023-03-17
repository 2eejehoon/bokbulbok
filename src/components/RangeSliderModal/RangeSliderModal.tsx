import { useState, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import style from "./RangeSliderModal.module.scss";
import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";
import Slider from "@/components/common/Slider/Slider";
import { rangeState } from "@/recoil/range";

export default function RangeSliderModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState(3 || rangeState);
  const [range, setRange] = useRecoilState(rangeState);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => {
    setModalOpen(false);
    setValue(range);
  }, [range]);

  const handleConfirm = useCallback(() => {
    setModalOpen(false);
    setRange(value);
  }, [value]);

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModalOpen}>
        {`${range} km`}
      </Button>
      <Modal type="slider" modalOpen={modalOpen} setModalClose={handleModalClose}>
        <div className={style.container}>
          <div className={style.sliderContainer}>
            <Slider
              value={value}
              setValue={setValue}
              id="거리"
              text={`${value} km 이내`}
              min="1"
              max="10"
              step="1"
            />
          </div>
          <div className={style.buttonContainer}>
            <Button type="button" color="white" size="small" onClick={handleModalClose}>
              취소
            </Button>
            <Button type="button" color="white" size="small" onClick={handleConfirm}>
              확인
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
