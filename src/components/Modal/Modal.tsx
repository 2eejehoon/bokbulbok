import style from "./Modal.module.scss";
import Portal from "../Portal";
import { ReactNode, Dispatch, SetStateAction, useCallback } from "react";
import classNames from "classnames/bind";

interface ModalProps {
  children: ReactNode;
  type: string;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

const cx = classNames.bind(style);

export default function Modal({
  children,
  type,
  modalOpen,
  setModalOpen,
}: ModalProps) {
  const handleClick = useCallback(() => setModalOpen((prev) => false), []);

  return (
    <Portal selector="portal">
      {modalOpen && (
        <>
          <div className={cx("modal", type)}>{children}</div>
        </>
      )}
    </Portal>
  );
}
