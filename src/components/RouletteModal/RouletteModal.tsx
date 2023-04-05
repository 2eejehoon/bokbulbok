import { useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
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
        돌려 돌려 돌림판
      </Button>
      <Modal type="roulette" modalOpen={modalOpen} setModalClose={handleModalClose}>
        <Roulette rouletteItems={rouletteItems} />
      </Modal>
    </>
  );
}
