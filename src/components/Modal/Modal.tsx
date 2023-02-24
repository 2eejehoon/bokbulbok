import "./Modal.module.scss";
import Portal from "../Portal";
import { ReactNode, Dispatch, SetStateAction, useCallback } from "react";

interface ModalProps {
  children: ReactNode;
  size: string;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  children,
  size,
  modalOpen,
  setModalOpen,
}: ModalProps) {
  const handleClick = useCallback(() => setModalOpen((prev) => false), []);

  return (
    <Portal selector="portal">
      {modalOpen && (
        <>
          <div className={["modal", size].join(" ")}>{children}</div>
        </>
      )}
    </Portal>
  );
}
