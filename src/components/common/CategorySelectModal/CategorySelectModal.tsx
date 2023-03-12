import { MouseEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Select from "../Select/Select";
import { categoryState } from "@/recoil/atom/category";

interface SelectModalProps {
  options: string[];
}

export default function CategorySelectModal({ options }: SelectModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useRecoilState(categoryState);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  const handleClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setCategory(e.currentTarget.innerHTML);
    setModalOpen(false);
  }, []);

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModalOpen}>
        {category}
      </Button>
      <Modal
        type="select"
        modalOpen={modalOpen}
        setModalClose={handleModalClose}
      >
        <Select options={options} onClick={handleClick} />
      </Modal>
    </>
  );
}
