import Portal from "./Portal";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  style: string;
}

export default function Modal({ children, style }: ModalProps) {
  return (
    <Portal selector="portal">
      <div className={style}>{children}</div>
    </Portal>
  );
}
