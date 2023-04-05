import { useState, MouseEvent } from "react";
import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
import Select from "../common/Select/Select";
import { SORT_ARRAY } from "@/contant";
import useModal from "@/hooks/useModal";
import useCustomRouter from "@/hooks/useCustomRouter";

export default function SortSelectModal() {
  const [sort, setSort] = useState("제목순");
  const [isModalOpen, handleModalOpen, handleModalClose] = useModal();

  const customRouterPush = useCustomRouter();

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    const currentValue = e.currentTarget.innerHTML;
    setSort(currentValue);
    customRouterPush("sort", currentValue);
    handleModalClose();
  };

  return (
    <>
      <Button type={"button"} color={"grey"} size={"small"} onClick={handleModalOpen}>
        {sort}
      </Button>
      <Modal type={"sort"} modalOpen={isModalOpen} setModalClose={handleModalClose}>
        <Select options={SORT_ARRAY} onClick={handleClick} />
      </Modal>
    </>
  );
}
