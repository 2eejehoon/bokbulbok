import { MouseEvent, useCallback, useState } from "react";
import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
import Select from "../common/Select/Select";

interface SelectModalProps {
  options: string[];
}

export default function CategorySelectModal({ options }: SelectModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState("모두");

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  const handleClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setValue(e.currentTarget.innerHTML);
    setModalOpen(false);
  }, []);

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModalOpen}>
        {value}
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
