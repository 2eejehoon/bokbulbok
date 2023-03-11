import { useState, useCallback, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
import Select from "../common/Select/Select";
import { sortState } from "@/recoil/atom/sort";

interface SortSelectModal {
  options: string[];
}

export default function SortSelectModal({ options }: SortSelectModal) {
  const [modalOpen, setModalOpen] = useState(false);
  const [sort, setSort] = useRecoilState(sortState);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  const handleClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setModalOpen(false);
    setSort(e.currentTarget.innerHTML);
  }, []);

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModalOpen}>
        {sort}
      </Button>
      <Modal type="sort" modalOpen={modalOpen} setModalClose={handleModalClose}>
        <Select options={options} onClick={handleClick} />
      </Modal>
    </>
  );
}
