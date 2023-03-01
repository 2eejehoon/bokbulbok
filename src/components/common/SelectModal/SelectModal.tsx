import { MouseEvent, useCallback, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Select from "../Select/Select";

interface SelectModalProps {
  options: string[];
}

export default function SelectModal({ options }: SelectModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [value, setValue] = useState("전체");

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  const handleChange = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setModalOpen(false);
    setValue(e.currentTarget.innerHTML);
  }, []);

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModalOpen}>
        {value}
      </Button>
      <Modal
        type="select"
        modalOpen={modalOpen}
        setModalOpen={handleModalClose}
      >
        <Select options={options} value={value} onChange={handleChange} />
      </Modal>
    </>
  );
}
