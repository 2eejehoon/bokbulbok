import { ReactNode, MouseEventHandler, memo } from "react";
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

function Modal({ children, type, modalOpen, setModalClose }: ModalProps) {
  return (
    <>
      {modalOpen && (
        <Portal selector="portal">
          <div className={cx("modal", type)}>{children}</div>
          <div className={style.background} onClick={setModalClose} />
        </Portal>
      )}
    </>
  );
}

export default memo(Modal);
