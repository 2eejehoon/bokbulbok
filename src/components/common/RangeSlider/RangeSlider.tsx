import style from "./RangeSlider.module.scss";
import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";
import Slider from "@/components/common/Slider/Slider";
import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import { distanceState } from "@/states/distance";

export default function RangeSlider() {
  const [modalOpen, setModalOpen] = useState(false);
  const [range, setRange] = useState<string>("0.5");
  const [distance, setDistance] = useRecoilState<string>(distanceState);

  const handleCancle = useCallback(() => {
    setModalOpen((prev) => !prev);
    setRange((prev) => distance);
  }, [distance]);

  const handleConfirm = useCallback(() => {
    setDistance((prev) => range);
    setModalOpen((prev) => false);
  }, [range]);

  return (
    <>
      <Button type="button" color="black" size="medium" onClick={handleCancle}>
        {`${distance} km`}
      </Button>
      <Modal type="slider" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className={style.sliderContainer}>
          <Slider
            value={range}
            setValue={setRange}
            id="거리"
            unit={"km"}
            min={"0"}
            max={"3"}
            step={"0.5"}
          />
        </div>
        <div className={style.buttonContainer}>
          <Button
            type="button"
            color="white"
            size="small"
            onClick={handleCancle}
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
