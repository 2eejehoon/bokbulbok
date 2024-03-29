import styled from "styled-components";
import Button from "./Button";
import Roulette from "./Roulette";
import Dialog from "./Dialog";

export default function RouletteModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ModalButton>돌려 돌려 돌림판</ModalButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content width={"360px"} height={"540px"}>
          <Roulette />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const ModalButton = styled(Button)`
  font-size: 12px;
  color: white;
  border: none;
  background-color: black;
  border-radius: 20px;
`;
