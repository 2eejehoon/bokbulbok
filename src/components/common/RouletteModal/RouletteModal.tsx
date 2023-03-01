import { useState, useCallback } from "react";
import { useRecoilValue } from "recoil";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import Roulette from "../Roulette/Roulette";
import { rouletteItemsState } from "@/states/atom/rouletteItems";

export default function RouletteModal() {
  const [modalOpen, setModalOpen] = useState(false);
  const rouletteItems = useRecoilValue(rouletteItemsState);

  const handleClick = useCallback(() => setModalOpen(true), []);
  const handleModal = useCallback(() => setModalOpen(false), []);

  return (
    <>
      <Button type="button" color="black" size="small" onClick={handleClick}>
        돌림판
      </Button>
      <Modal type="roulette" modalOpen={modalOpen} setModalOpen={handleModal}>
        <Roulette data={["1", "2", "3", "4", "5", "6"]} />
      </Modal>
    </>
  );
}
