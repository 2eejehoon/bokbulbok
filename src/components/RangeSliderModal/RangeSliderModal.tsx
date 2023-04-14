import { ChangeEvent, useCallback, useState } from "react";
import { useRouter } from "next/router";
import useCustomRouter from "../../hooks/useCustomRouter";
import style from "./RangeSliderModal.module.scss";
import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";
import Slider from "@/components/common/Slider/Slider";
import useModal from "@/hooks/useModal";
import { convertQueryToRange } from "@/utils/convert";

export default function RangeSliderModal() {
  const router = useRouter();
  const [range, setRange] = useState(convertQueryToRange(String(router.query.range)));
  const [isModalOpen, handleModalOpen, handleModalClose] = useModal();

  const handleRangePush = useCustomRouter("range") as (type: number) => void;

  const handleRangeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setRange(Number(e.target.value));
  }, []);

  const handleConfirm = () => {
    handleRangePush(range);
    handleModalClose();
  };

  return (
    <>
      <Button type={"button"} color={"grey"} size={"small"} onClick={handleModalOpen}>
        {`${range} km`}
      </Button>
      <Modal type={"slider"} modalOpen={isModalOpen} setModalClose={handleModalClose}>
        <div className={style.container}>
          <div className={style.sliderContainer}>
            <Slider
              value={range}
              onChange={handleRangeChange}
              id={"거리"}
              text={`${range} km`}
              min={"5"}
              max={"50"}
              step={"5"}
            />
          </div>
          <div className={style.buttonContainer}>
            <Button
              type={"button"}
              color={"white"}
              size={"small"}
              onClick={handleModalClose}
            >
              취소
            </Button>
            <Button
              type={"button"}
              color={"white"}
              size={"small"}
              onClick={handleConfirm}
            >
              확인
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
