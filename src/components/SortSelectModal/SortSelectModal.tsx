import styled from "styled-components";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Select from "../Select/Select";
import { SORT_ARRAY } from "@/contant";
import useSortSelectModal from "@/hooks/useSortSelectModal";

export default function SortSelectModal() {
  const {
    buttonRef,
    buttonRect,
    sortValue,
    isModalOpen,
    handleModalOpen,
    handleModalClose,
    handleSortClick,
  } = useSortSelectModal();

  return (
    <>
      <ModalButton ref={buttonRef} type={"button"} onClick={handleModalOpen}>
        {sortValue}
      </ModalButton>
      <Modal
        rect={buttonRect}
        width={160}
        height={150}
        modalOpen={isModalOpen}
        setModalClose={handleModalClose}
      >
        <Select options={SORT_ARRAY} onClick={handleSortClick} />
      </Modal>
    </>
  );
}

const ModalButton = styled(Button)`
  font-size: 12px;
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 20px;
  color: black;
`;
