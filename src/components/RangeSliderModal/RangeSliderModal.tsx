import { useState, useCallback, useRef } from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";
import useQueryRouter from "../../hooks/useQueryRouter";
import style from "./RangeSliderModal.module.scss";
import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";
import Slider from "@/components/common/Slider/Slider";
import { rangeState } from "@/recoil/range";
import useModal from "@/hooks/useModal";

export default function RangeSliderModal() {
  const valueRef = useRef(null);
  const [value, setValue] = useState(5);
  const [isModalOpen, handleModalOpen, handleModalClose] = useModal();

  const handleRouterPush = useQueryRouter();

  const handleConfirm = () => {
    handleModalClose();
    handleRouterPush(value);
  };

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModalOpen}>
        {`${value} km`}
      </Button>
      <Modal type="slider" modalOpen={isModalOpen} setModalClose={handleModalClose}>
        <div className={style.container}>
          <div className={style.sliderContainer}>
            <Slider
              value={value}
              setValue={setValue}
              id="거리"
              text={`${value} km`}
              min="0"
              max="50"
              step="5"
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
