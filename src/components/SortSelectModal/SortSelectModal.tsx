import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
import Select from "../common/Select/Select";
import { SORT_ARRAY } from "@/contant";
import useSortSelectModal from "@/hooks/useSortSelectModal";

export default function SortSelectModal() {
  const [sort, isModalOpen, handleModalOpen, handleModalClose, handleSortClick] =
    useSortSelectModal();

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
