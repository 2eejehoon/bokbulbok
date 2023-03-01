import { useState, useCallback, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Select from "../Select/Select";
import { sortState } from "@/states/atom/sort";

interface SortSelectModal {
  options: string[];
}

export default function SortSelectModal({ options }: SortSelectModal) {
  const [modalOpen, setModalOpen] = useState(false);
  const [sort, setSort] = useRecoilState(sortState);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  const handleChange = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      setModalOpen(false);
      setSort(e.currentTarget.innerHTML);
    },
    [setSort]
  );

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModalOpen}>
        {sort}
      </Button>
      <Modal type="sort" modalOpen={modalOpen} setModalOpen={handleModalClose}>
        <Select options={options} value={sort} onChange={handleChange} />
      </Modal>
    </>
  );
}
