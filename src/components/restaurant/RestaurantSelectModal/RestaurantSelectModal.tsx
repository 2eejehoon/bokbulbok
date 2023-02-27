import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import Select from "../../common/Select/Select";
import { restaurantState } from "@/states/atom/filter";

export default function RestaurantSelectModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useRecoilState(restaurantState);

  const handleModal = useCallback(() => setModalOpen((prev) => !prev), []);

  return (
    <>
      <Button type="button" color="black" size="medium" onClick={handleModal}>
        {category}
      </Button>
      <Modal type="restaurant" modalOpen={modalOpen} setModalOpen={handleModal}>
        <Select
          options={["전체", "한식", "중식", "양식", "일식", "동남아"]}
          setValue={setCategory}
        />
      </Modal>
    </>
  );
}
