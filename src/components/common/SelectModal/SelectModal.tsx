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

  const handleModal = useCallback(() => setModalOpen((prev) => !prev), []);

  const handleChange = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setModalOpen(false);
    setValue(e.currentTarget.innerHTML);
  }, []);

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModal}>
        {value}
      </Button>
      <Modal type="select" modalOpen={modalOpen} setModalOpen={handleModal}>
        <Select options={options} value={value} onChange={handleChange} />
      </Modal>
    </>
  );
}
