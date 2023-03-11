import { ReactNode, MouseEventHandler } from "react";
import classNames from "classnames/bind";
import Portal from "../Portal/Portal";
import style from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  type: string;
  modalOpen: boolean;
  setModalClose: MouseEventHandler<HTMLDivElement>;
}

const cx = classNames.bind(style);

export default function Modal({
  children,
  type,
  modalOpen,
  setModalClose,
}: ModalProps) {
  return (
    <Portal selector="portal">
      {modalOpen && (
        <>
          <div className={cx("modal", type)}>{children}</div>
          <div className={style.outerContainer} onClick={setModalClose} />
        </>
      )}
    </Portal>
  );
}
