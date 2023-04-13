import { MouseEvent, useCallback, useState } from "react";
import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
import Select from "../common/Select/Select";
import { SORT_ARRAY } from "@/contant";
import useModal from "@/hooks/useModal";
import useCustomRouter from "@/hooks/useCustomRouter";

export default function SortSelectModal() {
  const [sort, setSort] = useState("등록순");
  const [isModalOpen, handleModalOpen, handleModalClose] = useModal();

  const handleSortPush = useCustomRouter("sort") as (type: string) => void;

  const handleSortClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setSort(() => e.currentTarget.innerHTML);
    handleSortPush(e.currentTarget.innerHTML);
    handleModalClose();
  }, []);

  return (
    <>
      <Button type={"button"} color={"grey"} size={"small"} onClick={handleModalOpen}>
        {sort}
      </Button>
      <Modal type={"sort"} modalOpen={isModalOpen} setModalClose={handleModalClose}>
        <Select options={SORT_ARRAY} onClick={handleSortClick} />
      </Modal>
    </>
  );
}
