import { useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
import Roulette from "../common/Roulette/Roulette";
import { rouletteItemsState } from "@/recoil/atom/rouletteItems";

export default function RouletteModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const rouletteItems = useRecoilValue(rouletteItemsState);

  const handleModalOpen = useCallback(() => setModalOpen(true), []);
  const handleModalClose = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <Button
        type="button"
        color="black"
        size="small"
        onClick={handleModalOpen}
      >
        돌림판
      </Button>
      <Modal
        type="roulette"
        modalOpen={modalOpen}
        setModalClose={handleModalClose}
      >
        <Roulette data={["1", "2", "3", "4", "5", "6"]} />
      </Modal>
    </>
  );
}
