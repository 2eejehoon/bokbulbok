import styled from "styled-components";
import Button from "../Button/Button";
import Roulette from "../Roulette/Roulette";
import Dialog from "../Dialog/Dialog";

export default function RouletteModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ModalButton>돌려 돌려 돌림판</ModalButton>
      </Dialog.Trigger>
      <Dialog.Content width={"360px"} height={"540px"}>
        <Roulette />
      </Dialog.Content>
    </Dialog.Root>
  );
}

const ModalButton = styled(Button)`
  font-size: 12px;
  color: white;
  background-color: black;
  border-radius: 20px;
`;
