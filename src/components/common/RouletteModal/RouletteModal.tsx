import { useState, useCallback } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Roulette from "../Roulette/Roulette";

export default function RouletteModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = useCallback(() => setModalOpen((prev) => true), []);

  return (
    <>
      <Button type="button" color="black" size="medium" onClick={handleClick}>
        돌려 돌려 돌림판
      </Button>
      <Modal type="roulette" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Roulette />
      </Modal>
    </>
  );
}
