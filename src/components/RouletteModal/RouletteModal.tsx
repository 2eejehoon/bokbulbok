import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
import Roulette from "../Roulette/Roulette";
import useModal from "@/hooks/useModal";

export default function RouletteModal() {
  const [modalOpen, handleModalOpen, handleModalClose] = useModal();

  return (
    <>
      <Button type={"button"} color={"black"} size={"small"} onClick={handleModalOpen}>
        돌려 돌려 돌림판
      </Button>
      <Modal type={"roulette"} modalOpen={modalOpen} setModalClose={handleModalClose}>
        <Roulette />
      </Modal>
    </>
  );
}
