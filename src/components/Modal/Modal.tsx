import styled from "styled-components";
import { ReactNode, MouseEventHandler, memo, HTMLAttributes } from "react";
import Portal from "../Portal/Portal";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  width?: number;
  height?: number;
  modalOpen: boolean;
  setModalClose: MouseEventHandler<HTMLDivElement>;
}
function Modal({
  children,
  width,
  height,
  modalOpen,
  setModalClose,
  ...props
}: ModalProps) {
  return (
    <>
      {modalOpen && (
        <Portal selector="portal">
          <Container {...props} width={width} height={height}>
            {children}
          </Container>
          <Background onClick={setModalClose} />
        </Portal>
      )}
    </>
  );
}

const Container = styled.div<{ width?: number; height?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-color: white;
  border-radius: 10px;
  z-index: 2;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 60%;
  z-index: 1;
`;

export default memo(Modal);
