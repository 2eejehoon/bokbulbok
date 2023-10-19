import styled from "styled-components";
import Button from "../common/Button/Button";
import Modal from "../common/Modal/Modal";
import Roulette from "../Roulette/Roulette";
import useModal from "@/hooks/useModal";

export default function RouletteModal() {
  const [modalOpen, handleModalOpen, handleModalClose] = useModal();

  return (
    <>
      <ModalButton type={"button"} onClick={handleModalOpen}>
        돌려 돌려 돌림판
      </ModalButton>
      <Modal
        width={360}
        height={540}
        modalOpen={modalOpen}
        setModalClose={handleModalClose}
      >
        <Roulette />
      </Modal>
    </>
  );
}

const ModalButton = styled(Button)`
  font-size: 12px;
  color: white;
  background-color: black;
  border-radius: 20px;
`;
