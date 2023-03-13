import { MouseEvent, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import Select from "../../common/Select/Select";
import { sidoState } from "@/recoil/area";
import { SIDO_ARRAY } from "@/contant";

export default function SidoSelectModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sido, setSido] = useRecoilState(sidoState);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  const handleSidoClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setSido(e.currentTarget.innerHTML);
    setModalOpen(false);
  }, []);

  return (
    <>
      <Button type="button" color="grey" size="small" onClick={handleModalOpen}>
        {sido}
      </Button>
      <Modal type="sido" modalOpen={modalOpen} setModalClose={handleModalClose}>
        <Select options={SIDO_ARRAY} onClick={handleSidoClick} />
      </Modal>
    </>
  );
}
