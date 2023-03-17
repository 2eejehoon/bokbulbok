import { useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Roulette from "../Roulette/Roulette";
import { rouletteItemsState } from "@/recoil/rouletteItems";

export default function RouletteModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const rouletteItems = useRecoilValue(rouletteItemsState);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <Button type="button" color="black" size="small" onClick={handleModalOpen}>
        돌림판
      </Button>
      <Modal type="roulette" modalOpen={modalOpen} setModalClose={handleModalClose}>
        <Roulette data={["1", "2", "3", "4", "5", "6"]} />
      </Modal>
    </>
  );
}
