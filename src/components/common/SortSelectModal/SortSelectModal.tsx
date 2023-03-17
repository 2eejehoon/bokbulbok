import { useState, useCallback, MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { QueryClient } from "@tanstack/react-query";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Select from "../Select/Select";
import { sortState } from "@/recoil/sort";
import { SORT_ARRAY } from "@/contant";

export default function SortSelectModal() {
  const queryClient = new QueryClient();
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
        <Select options={SORT_ARRAY} onClick={handleClick} />
      </Modal>
    </>
  );
}
