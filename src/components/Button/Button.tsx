import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  color: string;
  size: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const cx = classNames.bind(style);

export default function Button({
  children,
  type,
  color,
  size,
  onClick,
}: ButtonProps) {
  return (
    <button className={cx("button", color, size)} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
