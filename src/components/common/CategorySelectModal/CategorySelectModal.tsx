import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Select from "../Select/Select";
import { categoryState } from "@/states/atom/category";

export default function CategorySelectModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useRecoilState(categoryState);

  const handleModal = useCallback(() => setModalOpen((prev) => !prev), []);

  return (
    <>
      <Button
        type="button"
        color="black"
        size="medium"
        onClick={handleModal}
      >{`${category}`}</Button>
      <Modal type="select" modalOpen={modalOpen} setModalOpen={handleModal}>
        <Select value={category} setValue={setCategory} />
      </Modal>
    </>
  );
}
