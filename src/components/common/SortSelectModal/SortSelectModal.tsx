import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Select from "../Select/Select";
import { sortState } from "@/states/atom/sort";

export default function SortSelectModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sort, setSort] = useRecoilState(sortState);

  const handleModal = useCallback(() => setModalOpen((prev) => !prev), []);
  return (
    <>
      <Button type="button" color="black" size="medium" onClick={handleModal}>
        {sort}
      </Button>
      <Modal type="sort" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Select options={["제목", "최신", "거리"]} setValue={setSort} />
      </Modal>
    </>
  );
}
