import classNames from "classnames/bind";
import { ReactNode, MouseEventHandler } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  color: string;
  size: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
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
    <button
      className={cx("button", [color, size])}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
