import { ReactNode, Dispatch, SetStateAction, useCallback } from "react";
import classNames from "classnames/bind";
import Portal from "../Portal/Portal";
import style from "./Modal.module.scss";

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
  const handleOuterClick = useCallback(
    () => setModalOpen((prev) => false),
    [setModalOpen]
  );

  return (
    <Portal selector="portal">
      {modalOpen && (
        <>
          <div className={cx("modal", type)}>{children}</div>
          <div className={style.outerContainer} onClick={handleOuterClick} />
        </>
      )}
    </Portal>
  );
}
